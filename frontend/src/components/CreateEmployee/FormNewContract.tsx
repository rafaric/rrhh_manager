/** @jsxImportSource react */
import { Dropdown } from "primereact/dropdown";
import { Message } from "primereact/message";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import type { Department, User } from "~/modules";
type ContractForm = {
  salario: number;
  descripcion: string;
  cargo: Department;
  fecha_inicio: Date;
  fecha_fin: Date;
};

export const FormNewContract = ({ employeeData }: { employeeData: User }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContractForm>({});
  const [isLoadind, setIsLoadind] = useState(false);
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/cargo`, {
        method: "GET",
        credentials: "include",
      });
      const { data } = await res.json();
      setDepartments(data);
    };

    fetchData();
    register("salario", {
      required: {
        value: true,
        message: "El salario es obligatorio",
      },
    });
    register("cargo", {
      required: {
        value: true,
        message: "El cargo es obligatorio",
      },
    });
    register("fecha_inicio", {
      required: {
        value: true,
        message: "La fecha de inicio es obligatoria",
      },
    });
    register("fecha_fin", {
      required: {
        value: true,
        message: "La fecha final es obligatoria",
      },
    });
  }, []);
  const [messageResponse, setMessageResponse] = useState<{
    status: number;
    message: string;
  }>();
  const onSubmit: SubmitHandler<ContractForm> = async (inputData) => {
    setIsLoadind(true);
    console.log(inputData);
    const cleanData = {
      ...inputData,
      usuarioId: employeeData.id,
      salario: inputData.salario * 100,
      cargoId: inputData.cargo.id,
      fecha_inicio: inputData.fecha_inicio.toISOString().split("T")[0],
      fecha_fin: inputData.fecha_fin.toISOString().split("T")[0],
    };
    try {
      const res = await fetch(`/api/contract`, {
        method: "POST",
        body: JSON.stringify(cleanData),
      });
      const { message } = await res.json();

      setMessageResponse({ status: res.status, message });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadind(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full gap-7">
      <div className="flex flex-col justify-evenly gap-4">
        <label className="rounded-xl border border-light  px-3 py-1">
          <p className="text-xs text-gray">Salario</p>
          <InputNumber
            inputId="currency-us"
            value={watch("salario")}
            onValueChange={(e) => setValue("salario", e.target.value as number)}
            mode="currency"
            currency="USD"
            locale="en-US"
          />
          <p className="h-4 text-xs text-primary900">
            {" "}
            {errors.salario?.message}
          </p>
        </label>
        <label className="rounded-xl border border-light  px-3 py-1">
          <p className="text-xs text-gray">descripción</p>
          <input
            className="w-full outline-none"
            {...register("descripcion", {
              required: {
                value: true,
                message: "La descripción es obligatorio",
              },
            })}
          />
          <p className="h-4 text-xs text-primary900">
            {" "}
            {errors.descripcion?.message}
          </p>
        </label>
        <label className="rounded-xl border border-light  px-3 py-1">
          <p className="text-xs text-gray">fecha de inicio</p>
          <Calendar
            value={watch("fecha_inicio")}
            onChange={(e) => setValue("fecha_inicio", e.value as Date)}
            maxDate={watch("fecha_fin")}
            dateFormat="dd/mm/yy"
          />
          <p className="h-4 text-xs text-primary900">
            {" "}
            {errors.fecha_inicio?.message}
          </p>
        </label>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <label className="w-full rounded-xl border  border-light px-3 py-1">
          <p className="text-xs text-gray">fecha final</p>
          <Calendar
            value={watch("fecha_fin")}
            onChange={(e) => setValue("fecha_fin", e.value as Date)}
            minDate={watch("fecha_inicio")}
            dateFormat="dd/mm/yy"
          />
          <p className="h-4 text-xs text-primary900">
            {" "}
            {errors.fecha_fin?.message}
          </p>
        </label>
        <label className="w-full rounded-xl border  border-light px-3 py-1">
          <Dropdown
            value={watch("cargo")}
            options={departments}
            optionLabel="nombre"
            placeholder="Selecciona un cargo"
            filter
            onChange={(e) => setValue("cargo", e.target.value)}
            className="w-full"
          />
          <p className="h-4 text-xs text-primary900">
            {" "}
            {errors.cargo?.message}
          </p>
        </label>
        <button
          className="btn text-white w-full rounded-xl bg-primary600 p-3 text-[#fff]"
          type="submit"
        >
          {isLoadind ? (
            <img
              // eslint-disable-next-line qwik/jsx-img
              src="/loading-spinner.svg"
              className="m-auto w-4 animate-spin"
            />
          ) : (
            "Crear"
          )}
        </button>
        {messageResponse && (
          <Message
            severity={messageResponse.status === 201 ? "success" : "warn"}
            text={messageResponse.message}
          />
        )}
      </div>
    </form>
  );
};
