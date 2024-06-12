import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import type { Employees } from "~/modules";
export const useGetEmployee = routeLoader$(async ({ params, cookie }) => {
  const token = cookie.get("user_login")?.value;
  const res = await fetch(
    `http://localhost:5173/api/contract?id=${params.contractId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const { data } = await res.json();
  return data;
});
export default component$(() => {
  const { value } = useGetEmployee();
  const user: Employees["Usuario"] = value.Usuario;
  const cargo: Employees["Cargo"] = value.Cargo;
  const navigate = useNavigate();
  return (
    <section>
      <div>
        <h3 class="text-xl font-bold">Información personal</h3>
        <div class="grid grid-cols-2 gap-5 p-2">
          {Object.entries(user).map(([key, value], i) => {
            const notShow = ["password", "updatedAt", "createdAt"];
            if (value && !notShow.includes(key)) {
              return (
                <div key={i} class="flex flex-col gap-2 ">
                  <p class="capitalize text-gray">{key}</p>
                  <p>
                    {!key.includes("createdAt") && !key.includes("updatedAt")
                      ? value
                      : new Date(value).toLocaleDateString()}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div>
        <h3 class="text-xl font-bold">Información laboral</h3>
        <div class="grid grid-cols-2 gap-5 p-2">
          {Object.entries(value).map(([key, value], i) => {
            const notShow = ["usuarioId", "id", "cargoId"];
            if (
              (value && !notShow.includes(key) && typeof value === "string") ||
              typeof value === "number"
            ) {
              return (
                <div key={i} class="flex flex-col gap-2 ">
                  <p class="capitalize text-gray">{key.replace("_", " ")}:</p>
                  <p>
                    {key.includes("fecha") &&
                      new Date(value).toLocaleDateString()}
                    {key.includes("salario") &&
                      Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "usd",
                      }).format((value as number) / 100)}
                    {!key.includes("salario") &&
                      !key.includes("fecha") &&
                      value}
                  </p>
                </div>
              );
            }
          })}
          <div class="flex flex-col gap-2 ">
            <p class="capitalize text-gray">cargo:</p>
            <p>{cargo.nombre}</p>
          </div>
          <div class="flex flex-col gap-2 ">
            <p class="capitalize text-gray">descripción del cargo:</p>
            <p>{cargo.descripcion}</p>
          </div>
        </div>
      </div>
      <div class="flex w-full pr-3 pt-5">
        <button
          class="ml-auto text-[#f00] underline"
          onClick$={() => {
            fetch(`/api/contract?id=${value.id}`, {
              method: "DELETE",
            }).then((res) => {
              res.status === 202 && navigate("/empleados/");
            });
          }}
        >
          Dar de baja contrato
        </button>
      </div>
    </section>
  );
});
export const head: DocumentHead = ({ resolveValue }) => {
  const employee = resolveValue(useGetEmployee);
  return {
    title: `${employee.Usuario.nombre} ${employee.Usuario.apellido}`,
  };
};
