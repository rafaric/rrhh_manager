/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { useAppStore } from "~/store";
export const MyProfile = qwikify$(
  () => {
    const user = useAppStore((state) => state.user);
    return (
      <div className="flex items-center gap-1 rounded-xl border border-light p-1">
        <img src="/user.svg" />
        <div>
          <p className="text-xs font-bold">{user.nombre}</p>
          <p className="text-xs">{user.apellido}</p>
        </div>
        <img src="/arrow-down.svg" className="cursor-pointer" />
      </div>
    );
  },
  { eagerness: "load" },
);
