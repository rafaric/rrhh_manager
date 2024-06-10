import { useSignal, component$, useTask$, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { Holiday } from "~/modules";

export const Authorice = component$(() => {
  const loc = useLocation();
  const id = loc.params.id;
  const licencia = useSignal<Holiday>({
    id: "0",
    tipo: "",
    motivo: "",
    fecha_inicio: "",
    fecha_fin: "",
    estado: "",
    usuarioId: "",
  });

  useTask$(async () => {
    await fetch(`http://localhost:5173/api/holidays/${id}/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ data }) => {
        licencia.value = data;
      });
  });
  const onClick = $(async () => {
    await fetch(`http://localhost:5173/api/holidays/${id}/`, {
      method: "PATCH",
      body: JSON.stringify({ estado: "APROBADO" }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
      });
  });

  return (
    <section class="w-full ">
      <section class=" relative mx-auto flex h-[350px] w-[700px] flex-col rounded-xl bg-light px-20 py-4 shadow-[-1px_1px_14px_4px_rgba(0,0,0,0.25)]">
        <div>
          <h1 class="text-white  text-2xl font-bold">Autorizar Vacación</h1>
        </div>
        <div class="mt-10 flex flex-col gap-2 ">
          <div class="flex flex-col gap-5">
            <div class="flex justify-between gap-5">
              <div class="flex w-1/2 flex-col gap-2">
                <label>Motivo</label>
                <input
                  id="motivo"
                  type="text"
                  placeholder="Motivo"
                  class="h-[45px] w-full rounded-lg p-4"
                  disabled
                  value={licencia.value.motivo}
                  // onChange$={onChange}
                />
                <label>Tipo</label>
                <select
                  id="tipo"
                  class="h-[45px] w-full rounded-lg bg-[#fff] px-4"
                  value={licencia.value.tipo}
                  disabled
                  // onChange$={onChangeSelect}
                >
                  <option value="VACACIONES">Vacaciones</option>
                  <option value="ENFERMEDAD">Enfermedad</option>
                  <option value="IMPONDERABLE">Imponderable</option>
                  <option value="OTROS">Otros</option>
                </select>
              </div>
              <div class="flex w-1/2 flex-col gap-2">
                <label>Fecha de inicio licencia</label>
                <input
                  id="fechainicio"
                  type="text"
                  placeholder="Seleccionar Fecha Inicio"
                  disabled
                  class="h-[45px] w-full rounded-lg p-4"
                  value={`${new Date(licencia.value.fecha_inicio).getDate()}/${new Date(licencia.value.fecha_inicio).getMonth() + 1}/${new Date(licencia.value.fecha_inicio).getFullYear()}`}
                  // min={today}
                  // onChange$={onChange}
                />
                <label>Fecha fin licencia</label>
                <input
                  id="fechafin"
                  type="text"
                  placeholder="Seleccionar Fecha Fin"
                  class="h-[45px] w-full rounded-lg p-4"
                  disabled
                  value={`${new Date(licencia.value.fecha_fin).getDate()}/${new Date(licencia.value.fecha_fin).getMonth() + 1}/${new Date(licencia.value.fecha_fin).getFullYear()}`}
                  // min={formData.fecha_inicio.toISOString().split("T")[0]}
                  // onChange$={onChange}
                />
              </div>
            </div>
            <select
              id="estado"
              class="h-[45px] w-full rounded-lg bg-[#fff] px-4"
              value={licencia.value.estado}
            >
              <option value="PENDIENTE">Pendiente</option>
              <option value="APROBADO">Aprobado</option>
              <option value="RECHAZADO">Rechazado</option>
              <option value="CANCELADO">Cancelado</option>
            </select>

            <div class="mx-auto mt-14 flex w-full justify-center gap-2">
              <button class="text-gray-500 hover:text-gray-700 w-full rounded-lg px-4 py-3 hover:border hover:border-primary700">
                Cancelar
              </button>
              <button
                class="text-gray-500 hover:text-gray-700 w-full rounded-lg border border-primary700 bg-primary800 px-4 py-3 text-light hover:bg-primary600"
                // onSubmit$={onSubmit}
                onClick$={onClick}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
});
