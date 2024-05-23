import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useCheckToken = routeLoader$(({ cookie, redirect, pathname }) => {
  if (cookie.get("token") && pathname.includes("auth")) {
    throw redirect(301, "/");
  }
  if (!cookie.get("token") && !pathname.includes("auth")) {
    throw redirect(301, "/auth/register");
  }
});

export default component$(() => {
  return (
    <>
      <main>
        <Slot />
      </main>
    </>
  );
});
