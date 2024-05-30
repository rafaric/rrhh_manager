/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import type { User } from "~/modules";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";

export const EmployeesList = qwikify$(
  () => {
    const [employees] = useState<User[]>([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredList, setFilteredList] = useState<User[]>([]);

    useEffect(() => {
      for (let i = 0; i < 10; i++) {
        employees.push({
          id: `id${i}`,
          email: `email${i}@ejemplo.com`,
          password: `password${i}`,
          rol: `rol${i}`,
          nombre: `nombre${i}`,
          apellido: `apellido${i}`,
          dni: 32324324 + i,
          direccion: `direccion${i}`,
          telefono: `2132132${i}`,
        });
      }
    }, []);

    useEffect(() => {
      setFilteredList(
        employees.filter((employee) => {
          return (
            employee.nombre.includes(searchInput) ||
            employee.apellido.includes(searchInput) ||
            employee.dni.toString().includes(searchInput)
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
                    Agregar nuevo empleado
                  </button>
                </div>
              </div>
            );
          }}
          emptyMessage="No hay empleados registrados."
        >
          <Column field="nombre" header="Nombre"></Column>
          <Column field="apellido" header="Apellido"></Column>
          <Column field="dni" header="DNI"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="direccion" header="Dirección"></Column>
          <Column field="telefono" header="Teléfono"></Column>
        </DataTable>
      </div>
    );
  },
  { eagerness: "load" },
);
