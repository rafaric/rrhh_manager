import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Sidebar } from "~/components/Sidebar";

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
      <main class="flex font-ZenMaru">
        <Sidebar />
        <Slot />
      </main>
    </>
  );
});
