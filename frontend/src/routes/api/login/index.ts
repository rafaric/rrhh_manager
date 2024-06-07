import type { RequestHandler } from "@builder.io/qwik-city";
interface LoginUser {
  email: string;
  password: string;
}
export const onRequest: RequestHandler = async ({ request, json, cookie }) => {
  const body: LoginUser = await request.json();
  try {
    const res = await fetch("http://192.168.2.107:3000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (res.status === 202) {
      const { token } = data;
      const resUserData = await fetch("http://localhost:3000/api/v1/users/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const dataUser = await resUserData.json();
      if (resUserData.status === 200) {
        cookie.set("user_login", token, { path: "/" });
        json(res.status, dataUser);
      }
    } else {
      json(res.status, data.message);
    }
  } catch (error) {
    console.log(error);
  }
};
