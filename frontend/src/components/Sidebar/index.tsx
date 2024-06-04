import { component$ } from "@builder.io/qwik";
import { SidebarItem } from "./SidebarItem";
import { useContent } from "@builder.io/qwik-city";
import Logo from "/public/Logopreview.png";

export const Sidebar = component$(() => {
  const { menu } = useContent();
  return (
    <div class="ml-5 mt-2 flex h-screen w-[280px] flex-col items-center py-5">
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
      <ul class="mt-5 flex w-56 flex-col">
        {menu &&
          menu.items?.map((item, index) => (
            <SidebarItem key={index} title={item.text} href={item.href} />
          ))}
      </ul>
    </div>
  );
});
