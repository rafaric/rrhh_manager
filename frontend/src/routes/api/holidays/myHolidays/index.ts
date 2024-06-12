import type { RequestHandler } from "@builder.io/qwik-city";
import { type Holiday } from "~/modules";

export const onRequest: RequestHandler = async ({ json, request, cookie }) => {
  const token = cookie.get("user_login");

  try {
    const res = await fetch(
      "https://backup-s15-04-t-node-react.onrender.com/api/v1/licenseAplication/myLicenses",
      {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token ? token.value : ""}`,
        },
      },
    );
    const data: Holiday[] = await res.json();
    json(res.status, data);
  } catch (error) {
    console.log(error);
  }
};
