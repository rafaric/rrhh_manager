import { $, component$, useStore } from "@builder.io/qwik";

interface NuevaVacacionProps {
  onclickhide: any;
}
interface FormData {
  motivo: string;
  tipo: string;
  fecha_inicio: Date;
  fecha_fin: Date;
}

export const NuevaVacacion = component$<NuevaVacacionProps>(
  ({ onclickhide }) => {
    const formData = useStore<FormData>({
      motivo: "",
      tipo: "",
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
    });
    const today = new Date().toISOString().split("T")[0];

    const onChange = $((e: Event, element: HTMLInputElement) => {
      if (element.id === "fechainicio") {
        formData.fecha_inicio = new Date(element.value);
      }
      if (element.id === "fechafin") {
        formData.fecha_fin = new Date(element.value);
      }
      if (element.id === "motivo") {
        formData.motivo = element.value;
      }
    });
    const onChangeSelect = $((e: Event, element: HTMLSelectElement) => {
      formData.tipo = element.value;
    });
    const onSubmit = $((e: Event) => {
      e.preventDefault();
      fetch("/api/holidays", {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then(() => {
          onclickhide();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
    return (
      <div class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-light bg-opacity-70">
        <div class=" relative flex h-[350px] w-[700px] flex-col rounded-xl bg-light px-20 py-4 shadow-[-1px_1px_14px_4px_rgba(0,0,0,0.25)]">
          <div>
            <h1 class="text-white  text-2xl font-bold">Nueva Vacación</h1>
          </div>
          <div class="mt-10 flex flex-col gap-2 ">
            <form
              class="flex flex-col gap-5"
              onSubmit$={onSubmit}
              preventdefault:submit
            >
              <div class="flex justify-between gap-5">
                <div class="flex w-1/2 flex-col gap-2">
                  <input
                    id="motivo"
                    type="text"
                    placeholder="Motivo"
                    class="h-[56px] w-full rounded-lg p-4"
                    onChange$={onChange}
                  />
                  <select
                    id="tipo"
                    class="h-[56px] w-full rounded-lg bg-[#fff] p-4"
                    onChange$={onChangeSelect}
                  >
                    <option value="VACACIONES">Vacaciones</option>
                    <option value="ENFERMEDAD">Enfermedad</option>
                    <option value="IMPONDERABLE">Imponderable</option>
                    <option value="OTROS">Otros</option>
                  </select>
                </div>
                <div class="flex w-1/2 flex-col gap-2">
                  <input
                    id="fechainicio"
                    type="date"
                    placeholder="Seleccionar Fecha Inicio"
                    class="h-[56px] w-full rounded-lg p-4"
                    min={today}
                    onChange$={onChange}
                  />
                  <input
                    id="fechafin"
                    type="date"
                    placeholder="Seleccionar Fecha Fin"
                    class="h-[56px] w-full rounded-lg p-4"
                    min={formData.fecha_inicio.toISOString().split("T")[0]}
                    onChange$={onChange}
                  />
                </div>
              </div>

              <div class="mx-auto mt-14 flex w-full justify-center gap-2">
                <button
                  class="text-gray-500 hover:text-gray-700 w-full rounded-lg px-4 py-3 hover:border hover:border-primary700"
                  onClick$={onclickhide}
                >
                  Cancelar
                </button>
                <button
                  class="text-gray-500 hover:text-gray-700 w-full rounded-lg border border-primary700 bg-primary800 px-4 py-3 text-light hover:bg-primary600"
                  onSubmit$={onSubmit}
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  },
);
