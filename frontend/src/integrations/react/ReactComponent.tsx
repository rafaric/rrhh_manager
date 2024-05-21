/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { useAppStore } from "~/store";
export const ReactComponent = qwikify$(
  () => {
    const user = useAppStore((state) => state.user);
    return <p>{user} desde el store</p>;
  },
  { eagerness: "load" },
);
