import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { SidebarItem } from "./SidebarItem";
import { useContent } from "@builder.io/qwik-city";
import Logo from "../../media/Logopreview.png";

export const Sidebar = component$(() => {
  const { menu } = useContent();
  const user = useSignal("");
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    if (window.localStorage.getItem("rrhh_store")) {
      const token = JSON.parse(window.localStorage.getItem("rrhh_store") || "");
      user.value = token.state.user.rol;
    }
  });
  return (
    <div class="mb-20 ml-5 mt-2 flex h-screen w-[280px] flex-col items-center py-2">
      <a href="/">
        <img
          src={Logo}
          alt="Logo"
          width={150}
          height={150}
          class="self-start"
        />
      </a>
      {/** MENU */}
      <ul class=" flex w-56 flex-col">
        {menu &&
          menu.items?.map((item, index) =>
            user.value !== "ADMIN" &&
            (item.text == "Todos los empleados" ||
              item.text === "Areas" ||
              item.text === "Nómina" ||
              item.text === "Candidatos" ||
              item.text === "Planillas" ||
              item.text === "Empresa") ? (
              <p key={index}></p>
            ) : (
              <SidebarItem key={index} title={item.text} href={item.href} />
            ),
          )}
      </ul>
    </div>
  );
});
