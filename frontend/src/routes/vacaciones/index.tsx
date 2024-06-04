import { component$ } from "@builder.io/qwik";
import { Header } from "~/components/Header/index";
import { TablaVacaciones } from "./TablaVacaciones";

export default component$(() => {
  return (
    <section class="w-full ">
      <Header />
      <TablaVacaciones />
    </section>
  );
});
