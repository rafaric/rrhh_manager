import { $, component$, useSignal } from "@builder.io/qwik";
import { Header } from "~/components/Header/index";
import { TablaVacaciones } from "./TablaVacaciones";
import { NuevaVacacion } from "./NuevaVacacion";

export default component$(() => {
  const show = useSignal(false);
  const onclickshow = $(() => {
    show.value = true;
  });
  const onclickhide = $(() => {
    show.value = false;
  });
  return (
    <section class="w-full ">
      <Header />
      <TablaVacaciones onclikshow$={onclickshow} />
      {show.value ? <NuevaVacacion onclickhide={onclickhide} /> : null}
    </section>
  );
});
