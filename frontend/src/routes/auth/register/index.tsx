import { component$ } from "@builder.io/qwik";
import RegisterForm from "~/components/RegisterForm";

export default component$(() => {
  return (
    <section class="min-h-svh flex">
      <RegisterForm />
    </section>
  );
});
