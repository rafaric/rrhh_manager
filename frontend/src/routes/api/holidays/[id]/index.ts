import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({
  request,
  json,
  cookie,
  params,
}) => {
  const token =
    cookie.get("user_login")?.value ??
    request.headers.get("authorization")?.split(" ")[1];
  console.log(request.headers.get("Authorization"));

  try {
    const res = await fetch(
      `https://backup-s15-04-t-node-react.onrender.com/api/v1/licenseAplication/${params.id}`,
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
