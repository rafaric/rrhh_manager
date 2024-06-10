import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";
import { Header } from "~/components/Header/index";
import { AreaCard } from "~/components/areasCard";
import type { Department } from "~/modules";
export const useAddDepartment = routeAction$(async (dataForm, requestEvent) => {
  const token = requestEvent.cookie.get("user_login")?.value;
  try {
    const res = await fetch(`${requestEvent.url.origin}/api/cargo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    });
    const data = await res.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.log(error);
  }
});

export default component$(() => {
  const action = useAddDepartment();
  const departments = useStore<{ data: Department[] }>({
    data: [],
  });
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ track }) => {
    track(() => action.value);
    const res = await fetch(`/api/cargo`, {
      method: "GET",
      credentials: "include",
    });
    const { data } = await res.json();
    departments.data = data;
  });

  return (
    <section class="flex w-full flex-col">
      <Header />
      <section class="px-5">
        <div class="mb-5 ml-auto flex h-fit w-fit rounded-lg border border-light p-2">
          <Form
            action={action}
            spaReset
            class="flex w-full flex-col gap-2 text-sm "
          >
            <input
              name="nombre"
              placeholder="Nombre"
              class="rounded-lg border border-light p-1"
            />
            <input
              name="descripcion"
              placeholder="Descripción"
              class="rounded-lg border border-light p-1"
            />
            <button
              class="btn text-white rounded-lg bg-primary px-2 py-1 text-[#fff]"
              type="submit"
            >
              Crear nueva area
            </button>
          </Form>
        </div>
        <div class="grid w-full grid-cols-3 justify-center gap-5">
          {departments.data.map((department, i) => (
            <AreaCard key={i} department={department} />
          ))}
        </div>
      </section>
    </section>
  );
});
