/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { User, type Holiday } from "~/modules";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import { useHolidayStore } from "~/store";

interface Props {
  show: boolean;
  onclikshow: any;
}
enum estado {
  Aprobado = "APROBADO",
  Rechazado = "RECHAZADO",
  Pendiente = "PENDIENTE",
  Cancelado = "CANCELADO",
}

export const TablaVacaciones = qwikify$<Props>(
  ({ show, onclikshow }) => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredList, setFilteredList] = useState<Holiday[]>([]);
    const [selectedVacation, setSelectedVacation] = useState<Holiday>();
    const { holiday, setHoliday } = useHolidayStore();
    const [user, setUser] = useState<User>();

    useEffect(() => {
      if (typeof window !== "undefined") {
        const user = JSON.parse(localStorage.getItem("rrhh_store") || "");
        setUser(user?.state?.user);
        const isAdmin = user?.state.user.rol === "ADMIN";
        const apiUrl = isAdmin ? "/api/holidays" : "/api/holidays/myHolidays";

        fetch(apiUrl, {
          method: "GET",
        })
          .then((res) => res.json())
          .then(({ data }) => {
            setHoliday(data);
            setFilteredList(data);
            console.log(data);
          });
      }
    }, [show]);

    useEffect(() => {
      setFilteredList(
        holiday.filter((vacacion) => {
          const searchFields = ["fecha_inicio", "motivo"];
          if (user?.rol === "ADMIN") {
            searchFields.push("Usuario.apellido");
          }
          return searchFields.some((field) => {
            const value = field
              .split(".")
              .reduce((obj, key) => obj?.[key], vacacion);
            return value
              .toString()
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          });
        }),
      );
    }, [searchInput]);
    const dateBodyTemplate = (rowData: Holiday) => {
      return <div>{new Date(rowData.fecha_inicio).toLocaleDateString()} </div>;
    };
    const usuarioBodyTemplate = (rowData: Holiday) => {
      return rowData.Usuario !== undefined ? (
        <div>{rowData.Usuario.apellido + ", " + rowData.Usuario.nombre} </div>
      ) : (
        <div>{user?.apellido + ", " + user?.nombre} </div>
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
            `${data.estado === estado.Aprobado ? "border-l-8 border-l-primary" : data.estado === estado.Cancelado ? "border-l-8 border-l-primary200" : data.estado === estado.Rechazado ? "border-l-8 border-l-error" : "border-l-8"} hover:bg-primary hover:text-light`
          }
          selectionMode={"single"}
          selection={selectedVacation}
          onSelectionChange={(e: any) => {
            setSelectedVacation(e.value as Holiday);
          }}
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
        {selectedVacation !== undefined && (
          <div className="flex w-full flex-col">
            {user?.rol === "ADMIN" && (
              <a
                className="mx-auto mt-5 w-fit items-center rounded-lg bg-primary px-4 py-4 text-light hover:bg-primary400"
                href={`/vacaciones/${selectedVacation.id}`}
              >
                Aprobar
              </a>
            )}
          </div>
        )}
      </div>
    );
  },
  { eagerness: "load" },
);
