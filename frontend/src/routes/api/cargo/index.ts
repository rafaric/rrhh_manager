import type { RequestHandler } from "@builder.io/qwik-city";
import type { Department } from "~/modules";

export const onPost: RequestHandler = async ({ json, request }) => {
  const body: Department = await request.json();
  const token = request.headers.get("authorization");
  if (token) {
    try {
      const res = await fetch("http://localhost:3000/api/v1/cargo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      json(res.status, data);
    } catch (error) {
      console.log(error);
    }
  }
};
export const onGet: RequestHandler = async ({ cookie, json }) => {
  const token = cookie.get("user_login");

  if (token) {
    try {
      const res = await fetch("http://localhost:3000/api/v1/cargo", {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      const data = await res.json();
      json(res.status, data);
    } catch (error) {
      console.log(error);
    }
  }
};
