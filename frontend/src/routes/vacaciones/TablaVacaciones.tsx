/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import type { Holiday } from "~/modules";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import { useHolidayStore } from "~/store";

interface Props {
  onclikshow: any;
}

export const TablaVacaciones = qwikify$<Props>(
  ({ onclikshow }) => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredList, setFilteredList] = useState<Holiday[]>([]);

    const { holiday, setHoliday } = useHolidayStore();

    useEffect(() => {
      fetch("/api/holidays", {
        method: "GET",
      })
        .then((res) => res.json())
        .then(({ data }) => {
          setHoliday(data);
          setFilteredList(data);
        });

      /* for (let i = 0; i < 9; i++) {
        holidays.push({
          id: `id${i}`,
          fecha_fin: "14/02/2024",
          fecha_inicio: "14/02/2024",
          tipo: "vacaciones",
          usuarioId: "",
          motivo: "",
          estado: "pasado",
        });
      }
      holidays.push({
        id: "id11",
        fecha_inicio: "14/02/2024",
        fecha_fin: "14/02/2024",
        tipo: "vacaciones",
        motivo: "",
        estado: "actual",
        usuarioId: "2",
      }); */
    }, []);

    useEffect(() => {
      setFilteredList(
        holiday.filter((vacacion) => {
          return (
            vacacion.Usuario?.apellido.includes(searchInput) ||
            vacacion.fecha_inicio.includes(searchInput) ||
            vacacion.motivo.includes(searchInput)
          );
        }),
      );
    }, [searchInput]);
    const dateBodyTemplate = (rowData: Holiday) => {
      return <div>{new Date(rowData.fecha_inicio).toLocaleDateString()} </div>;
    };
    const usuarioBodyTemplate = (rowData: Holiday) => {
      return (
        <div>{rowData.Usuario?.apellido + ", " + rowData.Usuario?.nombre} </div>
      );
    };
    return (
      <div className="card">
        <DataTable
          value={filteredList}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem", cursor: "pointer" }}
          header={() => {
            return (
              <div className="grid grid-cols-2">
                <div className="flex w-2/3 items-center gap-1 rounded-md border border-light bg-[#fff] p-1">
                  <img src="/search-icon.svg" className="w-4" />
                  <input
                    className="w-full outline-none"
                    placeholder="Buscar por fecha, motivo o usuario"
                    value={searchInput}
                    onChange={({ target: { value } }) => {
                      setSearchInput(value);
                    }}
                  />
                </div>
                <div className="flex w-full justify-end">
                  <button
                    className="flex items-center gap-1 rounded-xl bg-primary p-4 text-light"
                    onClick={onclikshow}
                  >
                    <img src="/add-circle.svg" className="w-4" />
                    Agregar nueva vacación
                  </button>
                </div>
              </div>
            );
          }}
          rowClassName={(data) =>
            `${data.estado === "PENDIENTE" ? "border-l-8 border-l-primary" : "border-l-8"} hover:bg-primary hover:text-light`
          }
          emptyMessage="No hay empleados con vacaciones."
        >
          <Column field="estado" header="Estado"></Column>
          <Column
            field="fecha_inicio"
            header="Fecha"
            body={dateBodyTemplate}
          ></Column>
          <Column
            field="usuario"
            header="Usuario"
            body={usuarioBodyTemplate}
          ></Column>
          <Column field="motivo" header="Motivo"></Column>
        </DataTable>
      </div>
    );
  },
  { eagerness: "load" },
);
