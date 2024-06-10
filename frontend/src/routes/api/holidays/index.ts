import type { RequestHandler } from "@builder.io/qwik-city";
import { type Holiday } from "~/modules";

export const onRequest: RequestHandler = async ({ json, request, cookie }) => {
  const token = cookie.get("user_login");
  try {
    const res = await fetch(
      "http://localhost:3000/api/v1/licenseAplication/AllLicenses",
      {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value}`,
        },
      },
    );
    const data: Holiday[] = await res.json();
    json(res.status, data);
  } catch (error) {
    console.log(error);
  }
};

export const onPost: RequestHandler = async ({ json, request, cookie }) => {
  const token = cookie.get("user_login");
  const body: {
    motivo: string;
    tipo: string;
    fecha_inicio: Date;
    fecha_fin: Date;
  } = await request.json();
  try {
    const res = await fetch(
      "http://localhost:3000/api/v1/licenseAplication/create",
      {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.value}`,
        },
        body: JSON.stringify(body),
      },
    );
    const data = await res.json();
    json(res.status, data);
  } catch (error) {
    console.log(error);
  }
};

export const onUpdate: RequestHandler = async ({ json, request, cookie }) => {
  const token = cookie.get("user_login");
  const body: {
    estado: string;
  } = await request.json();
  try {
    const res = await fetch("", {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    json(res.status, data);
  } catch (error) {
    console.log(error);
  }
};
