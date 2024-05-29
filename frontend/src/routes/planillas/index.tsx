import { component$ } from "@builder.io/qwik";
import { Header } from "~/components/Header/index";

export default component$(() => {
  return (
    <section class="w-full ">
      <Header />
      <p>Actualmente nos encontramos trabajando en este módulo.</p>
    </section>
  );
});
