import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
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
