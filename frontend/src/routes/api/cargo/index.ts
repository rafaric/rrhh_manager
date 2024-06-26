import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({
  cookie,
  json,
  request,
  query,
}) => {
  const cargoId = query.get("id") ?? "";
  const token =
    cookie.get("user_login")?.value ??
    request.headers.get("authorization")?.split(" ")[1];
  const body =
    request.method === "GET" || request.method === "DELETE"
      ? null
      : JSON.stringify(await request.json());
  if (token) {
    try {
      const res = await fetch(
        "https://backup-s15-04-t-node-react.onrender.com/api/v1/cargo/" +
          cargoId,
        {
          method: request.method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: body,
        },
      );

      const data = await res.json();

      json(res.status, data);
    } catch (error) {
      console.log(error);
    }
  }
};
