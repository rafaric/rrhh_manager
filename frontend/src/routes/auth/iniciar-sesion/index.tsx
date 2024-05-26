import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LoginForm } from "~/components/LoginForm";

export default component$(() => {
  return (
    <section class="m-auto grid min-h-svh w-screen grid-rows-2">
      <div class="m-auto mb-0  flex w-full max-w-xs flex-grow flex-col gap-3 ">
        <h1 class="text-3xl font-semibold">Bienvenido de nuevo</h1>
        <LoginForm />
      </div>
      <div class="pt-8 text-center">
        <p>
          No tienes cuenta?
          <Link class="text-primary" href="/auth/registro/">
            {" "}
            regístrate aquí
          </Link>
        </p>
      </div>
    </section>
  );
});
