import { component$ } from "@builder.io/qwik";
import { RegisterForm } from "~/components/RegisterForm";

export default component$(() => {
  return (
    <section class="m-auto flex min-h-svh w-screen justify-center ">
      <div class="m-auto flex max-w-xs flex-grow flex-col gap-3">
        <h1 class="text-3xl font-semibold">Bienvenido</h1>
        <RegisterForm />
      </div>
    </section>
  );
});
