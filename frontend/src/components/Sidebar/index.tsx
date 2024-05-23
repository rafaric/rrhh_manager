import { component$ } from "@builder.io/qwik";
import { SidebarItem } from "./SidebarItem";
import { useContent } from "@builder.io/qwik-city";

export const Sidebar = component$(() => {
  const { menu } = useContent();
  return (
    <div class="ml-5 mt-5 flex h-screen w-[280px] flex-col items-center py-5">
      <p>Logo</p>
      {/** MENU */}
      <ul class="mt-10 flex w-56 flex-col">
        {menu &&
          menu.items?.map((item, index) => (
            <SidebarItem key={index} title={item.text} href={item.href} />
          ))}
      </ul>
    </div>
  );
});
