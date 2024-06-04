import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/Header/index";
import { Card } from "~/components/Card/index";
import { CardsHolder } from "~/components/CardsHolder";

export default component$(() => {
  return (
    <section class="w-full">
      <Header />
      <section class="flex h-screen w-full">
        {/* Cards de ejemplo */}
        <CardsHolder>
          <Card
            titulo="Empleados totales"
            valor="80"
            icono="Todos los empleados"
          />
          <Card titulo="Asistencia Total" valor="70" icono="Asistencia" />
          <Card titulo="Candidatos" valor="20" icono="Candidatos" />
          <Card
            titulo="Solicitudes de Vacaciones"
            valor="10"
            icono="Vacaciones"
          />
        </CardsHolder>
      </section>
    </section>
  );
});

export const head: DocumentHead = {
  title: "HRM - Online",
  meta: [
    {
      name: "descripcion",
      content: "No Country HRM Suite - Online",
    },
  ],
};
