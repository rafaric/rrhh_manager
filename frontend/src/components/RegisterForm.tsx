/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

type RegisterForm = {
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  dni: number;
};
export const RegisterForm = qwikify$(
  () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterForm>();
    const [isLoadind, setIsLoadind] = useState(false);
    const [messageResponse, setMessageResponse] = useState("");
    const onSubmit: SubmitHandler<RegisterForm> = async (inputData) => {
      setIsLoadind(true);
      try {
        const res = await fetch(`/api/register`, {
          method: "POST",
          body: JSON.stringify(inputData),
        });
        const message = await res.json();
        if (res.status === 201) {
          location.pathname = "/auth/iniciar-sesion";
        } else {
          setMessageResponse(message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadind(false);
      }
    };
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-rows-1 gap-3"
      >
        <p className="text-center font-semibold text-[#f00]">
          {messageResponse}
        </p>
        <label className="rounded-xl border border-primary px-3 py-1">
          <p className="text-xs text-primary">Nombre</p>
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
        <label className="rounded-xl border border-primary px-3 py-1">
          <p className="text-xs text-primary">Apellido</p>
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
        <label className="rounded-xl border border-primary px-3 py-1">
          <p className="text-xs text-primary">DNI</p>
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
        <label className="rounded-xl border border-primary px-3 py-1">
          <p className="text-xs text-primary">Email</p>
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
          <p className="texh-4-primary900 h-3 text-xs">
            {" "}
            {errors.email?.message}
          </p>
        </label>
        <label className="rounded-xl border border-primary px-3 py-1">
          <p className="text-xs text-primary">Contraseña</p>
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
          className="btn text-white rounded-xl bg-primary p-3 text-[#fff]"
          type="submit"
        >
          {isLoadind ? (
            <img
              // eslint-disable-next-line qwik/jsx-img
              src="/loading-spinner.svg"
              className="m-auto w-4 animate-spin"
            />
          ) : (
            "Registrarse"
          )}
        </button>
      </form>
    );
  },
  { eagerness: "load" },
);
