import { useSignal, component$, useVisibleTask$ } from "@builder.io/qwik";
import { server$, useLocation, useNavigate } from "@builder.io/qwik-city";
import type { Holiday } from "~/modules";

export const Authorice = component$(() => {
  const token = useSignal("");
  const loc = useLocation();
  const id = loc.params.id;

  const nav = useNavigate();

  const licencia = useSignal<Holiday>({
    id: "0",
    tipo: "",
    motivo: "",
    fecha_inicio: "",
    fecha_fin: "",
    estado: "",
    usuarioId: "",
  });

  const onClick = server$(function () {
    const data = fetch(`http://localhost:3000/api/v1/licenseAplication/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ estado: licencia.value.estado }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token.value,
        /*  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhMzY4ODMxLTlkYjYtNDY4OC05MmNhLTJlYTQyYzlkNmU1ZSIsImVtYWlsIjoiYWRtaW5AcmguY29tIiwicm9sIjoiQURNSU4iLCJkbmkiOjg1Njc5NDEyLCJpYXQiOjE3MTgwNTgyMzEsImV4cCI6MTcxODE0NDYzMX0.el7b_-MnTrS6obV8bH02Ezg7D35vdV0-JBQeeyUxhUQ`, */
      },
    }).then((res) => res.json());
    return data;
  });
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const cookie = document.cookie;
    token.value = `Bearer ${cookie.slice(cookie.indexOf("=") + 1)}`;
    console.log(token.value);
    await fetch(`http://localhost:5173/api/holidays/${id}/`, {
      method: "GET",
      headers: {
        Authorization: token.value,
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        licencia.value = data;
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
              onChange$={($event, $element) => {
                if ($event.target) {
                  licencia.value.estado = $element.value;
                }
              }}
            >
              <option value="PENDIENTE">Pendiente</option>
              <option value="APROBADO">Aprobado</option>
              <option value="RECHAZADO">Rechazado</option>
              <option value="CANCELADO">Cancelado</option>
            </select>

            <div class="mx-auto mt-14 flex w-full justify-center gap-2">
              <button
                class="text-gray-500 hover:text-gray-700 w-full rounded-lg px-4 py-3 hover:border hover:border-primary700"
                onClick$={() => nav("/vacaciones/")}
              >
                Cancelar
              </button>
              <button
                class="text-gray-500 hover:text-gray-700 w-full rounded-lg border border-primary700 bg-primary800 px-4 py-3 text-light hover:bg-primary600"
                onClick$={() => {
                  onClick();
                  nav("/vacaciones/");
                }}
              >
                Modificar pedido
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
});
