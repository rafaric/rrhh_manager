import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { Sidebar } from "~/components/Sidebar";

export const useCheckToken = routeLoader$(({ cookie, redirect, pathname }) => {
  if (cookie.get("user_login") && pathname.includes("auth")) {
    throw redirect(301, "/");
  }
  if (!cookie.get("user_login") && !pathname.includes("auth")) {
    throw redirect(301, "/auth/registro");
  }
});

export default component$(() => {
  const { url } = useLocation();

  return (
    <>
      <main class="flex font-ZenMaru">
        {!url.pathname.includes("auth") && <Sidebar />}
        <Slot />
      </main>
    </>
  );
});
