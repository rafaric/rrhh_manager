import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { RegisterForm } from "~/components/RegisterForm";

export default component$(() => {
  return (
    <section class="m-auto grid max-h-svh min-h-svh w-screen grid-flow-row">
      <div class="  m-auto mb-0 flex w-full max-w-xs flex-col gap-3">
        <h1 class="text-3xl font-semibold">Bienvenido</h1>
        <p>Regístrate para iniciar</p>
        <RegisterForm />
      </div>
      <div class=" pt-8 text-center">
        <p>
          Ya tienes cuenta?
          <Link class="text-primary" href="/auth/iniciar-sesion/">
            {" "}
            inicia sesión aquí
          </Link>
        </p>
      </div>
    </section>
  );
});
