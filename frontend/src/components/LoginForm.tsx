/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useAppStore } from "~/store";

type LoginForm = {
  email: string;
  password: string;
};
export const LoginForm = qwikify$(
  () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginForm>();
    const [isLoadind, setIsLoadind] = useState(false);

    const setUser = useAppStore((state) => state.setUser);
    const [messageResponse, setMessageResponse] = useState("");
    const onSubmit: SubmitHandler<LoginForm> = async (inputData) => {
      setIsLoadind(true);
      try {
        const res = await fetch(`/api/login`, {
          method: "POST",
          body: JSON.stringify(inputData),
        });
        const data = await res.json();
        if (res.status === 202) {
          setUser(data);
          location.reload();
        } else {
          setMessageResponse(data);
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
          <p className="text-xs text-primary900"> {errors.email?.message}</p>
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
          <p className="text-xs text-primary900">{errors.password?.message}</p>
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
            "Iniciar sesión"
          )}
        </button>
      </form>
    );
  },
  { eagerness: "load" },
);
