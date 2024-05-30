import { component$ } from "@builder.io/qwik";
import { EmployeesList } from "~/components/EmployeesList";
import { Header } from "~/components/Header/index";

export default component$(() => {
  return (
    <section class="w-full ">
      <Header />
      <EmployeesList />
    </section>
  );
});
