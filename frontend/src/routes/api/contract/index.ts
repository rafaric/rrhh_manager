import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({
  cookie,
  json,
  request,
  query,
}) => {
  const contractId = query.get("id") ?? "";
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
        "http://localhost:3000/api/v1/contract/" + contractId,
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