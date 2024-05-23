import { component$ } from "@builder.io/qwik";
import RegisterForm from "~/components/RegisterForm";

export default component$(() => {
  return (
    <section class="m-auto flex min-h-svh w-screen">
      <RegisterForm />
    </section>
  );
});
