import { component$, Slot } from "@builder.io/qwik";
import { Header } from "~/components/Header";

export default component$(() => {
  return (
    <section class="w-full font-ZenMaru">
      <Header />
      <Slot />
    </section>
  );
});
