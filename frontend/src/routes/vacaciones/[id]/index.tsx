import { component$ } from "@builder.io/qwik";
import { Header } from "~/components/Header/index";
import { Authorice } from "./Authorice";

export default component$(() => {
  return (
    <section class="w-full ">
      <Header />
      <Authorice />
    </section>
  );
});
