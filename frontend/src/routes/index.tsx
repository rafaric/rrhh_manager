import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <p class="w-full text-primary800">hola mundo</p>
    </>
  );
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
