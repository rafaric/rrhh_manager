import type { RequestHandler } from "@builder.io/qwik-city";
export const onRequest: RequestHandler = async ({ cookie, json }) => {
  cookie.delete("user_login", { path: "/" });
  if (!cookie.has("user_login")) {
    json(200, {});
  }
};
