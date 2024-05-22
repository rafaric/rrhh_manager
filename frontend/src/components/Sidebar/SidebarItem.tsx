import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { IconSelect } from "./iconSelect";

interface SidebarItemProps {
  title: string;
  href?: string;
}

export const SidebarItem = component$(({ title, href }: SidebarItemProps) => {
  const { url } = useLocation();
  return (
    <li
      class={{
        "is-active": url.pathname === href,
        "flex w-full cursor-pointer items-center gap-2 border-primary px-3 py-3 hover:border-l-2 hover:text-primary":
          true,
      }}
    >
      <IconSelect icono={title} active={url.pathname === href} />
      <a href={href}>{title}</a>
    </li>
  );
});
