import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <>hola mundo</>;
});

export const head: DocumentHead = {
  title: "HRM - Online",
  meta: [
    {
      name: "descripcion",
      content: "No Country HRM Suite - Online",
    },
  ],
};
