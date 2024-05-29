import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/Header/index";

export default component$(() => {
  return (
    <section class="w-full">
      <Header />
      <p class="w-full text-primary800">hola mundo</p>
    </section>
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
