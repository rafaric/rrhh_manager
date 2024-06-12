import type { RequestHandler } from "@builder.io/qwik-city";
import { type Holiday } from "~/modules";

export const onRequest: RequestHandler = async ({ json, request, cookie }) => {
  const token = cookie.get("user_login");

  try {
    const res = await fetch(
      "http://localhost:3000/api/v1/licenseAplication/myLicenses",
      {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
      },
    );
    const data: Holiday[] = await res.json();
    json(res.status, data);
  } catch (error) {
    console.log(error);
  }
};
