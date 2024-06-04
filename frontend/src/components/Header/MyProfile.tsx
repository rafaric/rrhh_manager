/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";
import { useAppStore } from "~/store";
export const MyProfile = qwikify$(
  () => {
    const { user, setUser } = useAppStore((state) => state);
    const [openOptions, setOpenOptions] = useState(false);
    const logout = () => {
      fetch("/api/logout").then((res) => {
        if (res.status === 200) {
          location.reload();
          setUser({
            id: "",
            email: "",
            password: "",
            rol: "",
            nombre: "",
            apellido: "",
            dni: 0,
          });
        }
      });
    };
    return (
      <div className="relative flex items-center gap-1 rounded-xl border border-light p-1">
        <img src="/user.svg" />
        <div>
          <p className="text-xs font-bold">{user.nombre}</p>
          <p className="text-xs">{user.apellido}</p>
        </div>
        <img
          src={openOptions ? "/arrow-up.svg" : "/arrow-down.svg"}
          className="w-5 cursor-pointer rounded-full hover:bg-light"
          onClick={() => setOpenOptions(!openOptions)}
        />
        {openOptions && (
          <div className="absolute left-0 top-full mt-1 flex w-full flex-col items-start justify-center gap-2 rounded-xl border border-light px-1 py-2">
            <button className="flex w-full items-center rounded-xl px-1 py-2 text-sm hover:bg-light">
              <img src="/user-outline.svg" />
              Mi perfil
            </button>
            <button
              className="flex w-full items-center rounded-xl px-1 py-2 text-sm text-[#f00] hover:bg-light"
              onClick={logout}
            >
              <img src="/logout.svg" />
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    );
  },
  { eagerness: "load" },
);
