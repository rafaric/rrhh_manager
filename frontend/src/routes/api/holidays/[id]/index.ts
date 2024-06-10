import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({ json, cookie, params }) => {
  const token = cookie.get("user_login")?.value;

  try {
    const res = await fetch(
      `http://localhost:3000/api/v1/licenseAplication/${params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const data = await res.json();
    json(res.status, data);
  } catch (error) {
    console.log(error);
  }
};
