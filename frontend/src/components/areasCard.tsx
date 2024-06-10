/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { Department } from "~/modules";

export const AreaCard = qwikify$(
  ({ department }: { department: Department }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm<Department>();
    function putDepartment(data: Department) {
      setLoading(true);
      fetch(`/api/cargo?id=${department.id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 202) location.reload();
      });
    }
    return (
      <>
        <div
          className="w-full min-w-40 cursor-pointer rounded-lg border border-light p-2 hover:bg-light"
          onClick={() => setVisible(true)}
        >
          <h2 className="text-lg font-semibold">{department.nombre}</h2>
          <p className="text-sm">{department.descripcion}</p>
        </div>
        <Dialog
          header={department.nombre}
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <p className="mb-2">
            Actualiza la informacion del cargo <b>{`${department.nombre}`}</b>
          </p>
          <form
            onSubmit={handleSubmit(putDepartment)}
            method="PUT"
            className="flex flex-col gap-4"
          >
            <label htmlFor="" className="flex flex-col gap-1 ">
              <p className="text-xs text-primary">Nombre</p>
              <input
                className="rounded-lg border border-light p-2"
                type="text"
                defaultValue={department.nombre}
                {...register("nombre")}
              />
            </label>
            <label htmlFor="" className="flex flex-col gap-1 ">
              <p className="text-xs text-primary">Descripción</p>
              <input
                className="rounded-lg border border-light p-2"
                type="text"
                placeholder=""
                defaultValue={department.descripcion}
                {...register("descripcion")}
              />
            </label>
            <button
              className="btn text-white rounded-lg bg-primary px-2 py-1 text-[#fff]"
              type="submit"
            >
              {loading ? (
                <img
                  // eslint-disable-next-line qwik/jsx-img
                  src="/loading-spinner.svg"
                  className="m-auto w-4 animate-spin"
                />
              ) : (
                "Actualizar"
              )}
            </button>
          </form>
          <button
            onClick={() => {
              fetch(`/api/cargo?id=${department.id}`, { method: "DELETE" });
              location.reload();
            }}
            className="btn px-2 py-1 underline"
            type="submit"
          >
            Eliminar
          </button>
        </Dialog>
      </>
    );
  },
);
