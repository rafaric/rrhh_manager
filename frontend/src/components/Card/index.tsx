import { component$ } from "@builder.io/qwik";
import { IconSelect } from "../Sidebar/iconSelect";

interface Props {
  icono: string;
  titulo?: string;
  valor?: string;
}
/** Debe recibir ancho y alto - icono - titulo - Valor a mostrar */
export const Card = component$<Props>(({ icono, titulo, valor }) => {
  return (
    <div
      class={`flex min-h-fit min-w-fit flex-col justify-center rounded-lg border border-gray/30 px-4 py-6`}
    >
      <div class="flex items-center gap-5 px-5">
        <IconSelect icono={icono} active />
        <h1>{titulo}</h1>
      </div>
      <p class="p-4 text-3xl font-black">{valor}</p>
      <div class="my-3 w-full border border-gray/30"></div>
      <p class="px-4 font-light text-gray">Actualizado hoy</p>
    </div>
  );
});
