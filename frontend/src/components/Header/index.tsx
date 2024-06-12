import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import ImageSearch from "../../../public/search-icon.svg?jsx";
import ImageNotifications from "../../../public/notification.svg?jsx";

import { MyProfile } from "./MyProfile";
import { getSectionTitle } from "./GetSection";
export const Header = component$(() => {
  const {
    url: { pathname },
  } = useLocation();
  const titleHead = useDocumentHead().title;
  const title = getSectionTitle(pathname) || titleHead;
  return (
    <header class="flex items-center justify-between px-4 py-8 ">
      <h2 class="text-2xl font-bold ">{title}</h2>
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
