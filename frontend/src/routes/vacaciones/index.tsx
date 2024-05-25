import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="w-full bg-gray text-primary">
      <h2 class="font-bold">HMR on Line</h2>
      <h3>Comming Soon!</h3>
      <p>Actualmente nos encontramos trabajando en este módulo.</p>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};
