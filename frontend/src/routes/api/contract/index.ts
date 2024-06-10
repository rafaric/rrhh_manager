import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({ json, request, cookie }) => {
  const token = cookie.get("user_login");
  const body =
    request.method === "GET" ? null : JSON.stringify(await request.json());
  if (token) {
    try {
      const res = await fetch("http://localhost:3000/api/v1/contract", {
        method: request.method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
        body: body,
      });

      const data = await res.json();

      json(res.status, data);
    } catch (error) {
      console.log(error);
    }
  }
};
