import type { RequestHandler } from "@builder.io/qwik-city";
interface RegisterUser {
  name: string;
  email: string;
  password: string;
}
export const onRequest: RequestHandler = async ({ request, json, cookie }) => {
  const body: RegisterUser = await request.json();
  console.log(body);
  if (body.email) {
    cookie.set("token", body.password, { path: "/" });
    json(201, { message: "created", data: body });
  }
};
