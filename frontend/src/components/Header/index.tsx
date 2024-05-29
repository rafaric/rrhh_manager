import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import ImageSearch from "../../../public/search-icon.svg?jsx";
import ImageNotifications from "../../../public/notification.svg?jsx";

import { MyProfile } from "./MyProfile";
export const Header = component$(() => {
  const {
    url: { pathname },
  } = useLocation();
  const title =
    pathname.length > 1 ? pathname.replaceAll("/", "") : "Dashboard";
  return (
    <header class="flex items-center justify-between p-4 ">
      <h2 class="text-2xl font-bold capitalize">{title}</h2>
      <div class="flex h-10 gap-2">
        <div class="flex items-center gap-2 rounded-xl border border-light p-1">
          <ImageSearch class="aspect-square w-4" />
          <input type="text" placeholder="Buscar" class="outline-none" />
        </div>
        <div class="flex aspect-square  min-h-full cursor-pointer rounded-xl bg-light p-1">
          <ImageNotifications class="m-auto h-full" />
        </div>
        <MyProfile />
      </div>
    </header>
  );
});
