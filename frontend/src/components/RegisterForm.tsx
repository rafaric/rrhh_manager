/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useAppStore } from "~/store";

type RegisterForm = {
  email: string;
  password: string;
};
export const RegisterForm = qwikify$(
  () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterForm>();
    const setUser = useAppStore((state) => state.setUser);
    const [messageError, setMessageError] = useState("");
    const onSubmit: SubmitHandler<RegisterForm> = async (inputData) => {
      try {
        const res = await fetch(`/api/register`, {
          method: "POST",
          body: JSON.stringify(inputData),
        });
        const { data, message } = await res.json();
        if (res.status === 201) {
          setUser(data);
          location.reload();
        } else {
          setMessageError(message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-rows-1 gap-3"
      >
        <p className="text-center font-semibold text-[#f00]">{messageError}</p>
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
          <p> {errors.email?.message}</p>
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
                message: "Debe tener un minimo de 8 caracteres",
              },
            })}
          />
          <p>{errors.password?.message}</p>
        </label>
        <button
          className="btn text-white rounded-xl bg-primary p-3 text-[#fff]"
          type="submit"
        >
          Registrarse
        </button>
      </form>
    );
  },
  { eagerness: "load" },
);
