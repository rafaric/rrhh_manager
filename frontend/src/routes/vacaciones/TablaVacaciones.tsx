/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import type { Holiday } from "~/modules";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";

export const TablaVacaciones = qwikify$(
  () => {
    const [holidays] = useState<Holiday[]>([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredList, setFilteredList] = useState<Holiday[]>([]);

    useEffect(() => {
      for (let i = 0; i < 9; i++) {
        holidays.push({
          id: `id${i}`,
          fecha: "14/02/2024",
          descripcion: `descripcion${i}`,
          usuario_id: "1",
          estado: "pasado",
        });
      }
      holidays.push({
        id: "id11",
        fecha: "14/02/2024",
        descripcion: "descripcion11",
        usuario_id: "2",
        estado: "actual",
      });
    }, []);

    useEffect(() => {
      setFilteredList(
        holidays.filter((holiday) => {
          return (
            holiday.usuario_id.includes(searchInput) ||
            holiday.fecha.includes(searchInput) ||
            holiday.descripcion.toString().includes(searchInput)
          );
        }),
      );
    }, [searchInput]);
    return (
      <div className="card">
        <DataTable
          value={filteredList}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
          header={() => {
            return (
              <div className="grid grid-cols-2">
                <div className="flex w-2/3 items-center gap-1 rounded-md border border-light bg-[#fff] p-1">
                  <img src="/search-icon.svg" className="w-4" />
                  <input
                    className="w-full outline-none"
                    placeholder="Buscar por nombre, apellido o DNI"
                    value={searchInput}
                    onChange={({ target: { value } }) => {
                      setSearchInput(value);
                    }}
                  />
                </div>
                <div className="flex w-full justify-end">
                  <button className="flex items-center gap-1 rounded-xl bg-primary p-4 text-light">
                    <img src="/add-circle.svg" className="w-4" />
                    Agregar nueva vacación
                  </button>
                </div>
              </div>
            );
          }}
          rowClassName={(data) =>
            `${data.estado === "actual" ? "border-l-8 border-l-primary" : "border-l-8"}`
          }
          emptyMessage="No hay empleados con vacaciones."
        >
          <Column field="estado" header="Estado"></Column>
          <Column field="fecha" header="Fecha"></Column>
          <Column field="usuario_id" header="Usuario Id"></Column>
          <Column field="descripcion" header="Descripción"></Column>
        </DataTable>
      </div>
    );
  },
  { eagerness: "load" },
);
