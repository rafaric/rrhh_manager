/** @jsxImportSource react */
import { Message } from "primereact/message";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { User } from "~/modules";

type RegisterForm = {
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  dni: number;
};
interface Props {
  setEmployeeData: Dispatch<SetStateAction<User>>;
  setDisableNext: Dispatch<SetStateAction<boolean>>;
}
export const FormNewEmployee = ({ setDisableNext, setEmployeeData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();
  const [isLoadind, setIsLoadind] = useState(false);
  const [messageResponse, setMessageResponse] = useState<{
    status: number;
    message: string;
  }>();
  const onSubmit: SubmitHandler<RegisterForm> = async (inputData) => {
    setIsLoadind(true);
    try {
      const res = await fetch(`/api/register`, {
        method: "POST",
        body: JSON.stringify(inputData),
      });
      const { data, message } = await res.json();
      if (res.status === 201) {
        setDisableNext(false);
        setEmployeeData(data);
      }
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
        <label className="rounded-xl border border-light px-3 py-1">
          <p className="text-xs text-gray">Nombre</p>
          <input
            className="w-full outline-none"
            {...register("nombre", {
              required: {
                value: true,
                message: "El Nombre es obligatorio",
              },
            })}
          />
          <p className="h-4 text-xs text-primary900">
            {" "}
            {errors.nombre?.message}
          </p>
        </label>
        <label className="rounded-xl border border-light px-3 py-1">
          <p className="text-xs text-gray">Apellido</p>
          <input
            className="w-full outline-none"
            {...register("apellido", {
              required: {
                value: true,
                message: "El Apellido es obligatorio",
              },
            })}
          />
          <p className="h-4 text-xs text-primary900">
            {" "}
            {errors.apellido?.message}
          </p>
        </label>
        <label className="rounded-xl border border-light px-3 py-1">
          <p className="text-xs text-gray">DNI</p>
          <input
            className="w-full outline-none"
            {...register("dni", {
              required: {
                value: true,
                message: "El DNI es obligatorio",
              },
              setValueAs: (v) => parseInt(v),
              validate: {
                isNumber: (value) =>
                  !isNaN(value) || "El valor debe ser un número",
              },
            })}
          />
          <p className="h-4 text-xs text-primary900"> {errors.dni?.message}</p>
        </label>
      </div>
      <div className="flex flex-col items-start justify-start gap-4">
        <label className="rounded-xl border border-light px-3 py-1">
          <p className="text-xs text-gray">Email</p>
          <input
            className="w-full outline-none"
            {...register("email", {
              required: {
                value: true,
                message: "El email es obligatorio",
              },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Ingrese un email valido",
              },
            })}
          />
          <p className="h-4 text-xs text-primary900">
            {" "}
            {errors.email?.message}
          </p>
        </label>
        <label className="rounded-xl border border-light px-3 py-1">
          <p className="text-xs text-gray">Contraseña</p>
          <input
            type="password"
            className="w-full outline-none"
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es obligatoria",
              },
              minLength: {
                value: 8,
                message: "Debe tener un mínimo de 8 caracteres",
              },
            })}
          />
          <p className="h-4 text-xs text-primary900">
            {errors.password?.message}
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
            "Registrar"
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
