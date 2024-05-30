import { Slot, component$ } from "@builder.io/qwik";

export const CardsHolder = component$(() => {
  return (
    <div class="grid h-fit w-1/2 grid-cols-2 grid-rows-2 gap-1">
      <Slot />
    </div>
  );
});
