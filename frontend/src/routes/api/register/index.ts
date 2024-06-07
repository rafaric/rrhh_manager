import type { RequestHandler } from "@builder.io/qwik-city";
interface RegisterUser {
  name: string;
  email: string;
  password: string;
}
export const onRequest: RequestHandler = async ({ request, json }) => {
  const body: RegisterUser = await request.json();
  console.log(body);

  try {
    const res = await fetch("http://localhost:3000/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    json(res.status, data);
  } catch (error) {
    console.log(error);
  }
};
