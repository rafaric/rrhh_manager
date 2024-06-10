/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import type { Department, User } from "~/modules";
interface Employees {
  Cargo: Department;
  Usuario: User;
  cargoId: string;
  descripcion: string;
  fecha_fin: string;
  fecha_inicio: string;
  id: string;
  salario: number;
  status: string;
  usuarioId: string;
}
export const EmployeesList = qwikify$(
  () => {
    const [employees, setEmployees] = useState<Employees[]>([]);
    const [searchInput, setSearchInput] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [filteredList, setFilteredList] = useState<Employees[]>([]);

    useEffect(() => {
      fetch("/api/contract")
        .then((res) => res.json())
        .then(({ data }) => setEmployees(data))
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
    useEffect(() => {
      setFilteredList(employees);
    }, [employees]);
    useEffect(() => {
      setFilteredList(
        employees.filter((employee) => {
           return (
            employee.Usuario.nombre
              .toLocaleLowerCase()
              .includes(searchInput.toLocaleLowerCase()) ||
            employee.Usuario.apellido
              .toLocaleLowerCase()
              .includes(searchInput.toLocaleLowerCase()) ||
            employee.Usuario.dni
              .toString()
              .toLocaleLowerCase()
              .includes(searchInput.toLocaleLowerCase())
          );
        }),
      );
    }, [searchInput]);
    return (
      <div>
        <DataTable
          className="min-h-[50vh]"
          onRowSelect={(e) => {
            console.log(e.data);
          }}
          selectionMode="single"
          stripedRows
          value={filteredList}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
          loading={isLoading}
          loadingIcon={() => {
            return (
              <img
                // eslint-disable-next-line qwik/jsx-img
                src="/loading-spinner.svg"
                className="m-auto w-5 animate-spin"
              />
            );
          }}
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
                  <a
                    href="/empleados/nuevo-empleado/"
                    className="flex items-center gap-1 rounded-xl bg-primary p-4 text-light"
                  >
                    <img src="/add-circle.svg" className="w-4" />
                    Agregar nuevo empleado
                  </a>
                </div>
              </div>
            );
          }}
          emptyMessage="No hay empleados registrados."
        >
          <Column field="Usuario.nombre" header="Nombre"></Column>
          <Column field="Usuario.apellido" header="Apellido"></Column>
          <Column field="Usuario.dni" header="DNI"></Column>
          <Column field="Usuario.email" header="Email"></Column>
          <Column field="Cargo.nombre" header="Cargo"></Column>
          <Column
            field="salario"
            header="Salario"
            body={(data) => {
              return (
                <p>
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "usd",
                  }).format(data.salario / 100)}
                </p>
              );
            }}
          ></Column>
          <Column field="status" header="estado"></Column>
        </DataTable>
      </div>
    );
  },
  { eagerness: "load" },
);
