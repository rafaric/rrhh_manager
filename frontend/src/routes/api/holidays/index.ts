import type { RequestHandler } from "@builder.io/qwik-city";
import { useHolidayStore } from "~/store";

export const onRequest: RequestHandler = async ({ request }) => {
  try {
    const res = await fetch(
      "http://localhost:3000/api/v1/licenseAplication/AllLicenses",
      {
        method: request.method,
        headers: request.headers,
      },
    );
    const data = await res.json();
    // eslint-disable-next-line qwik/use-method-usage
    const { setHoliday } = useHolidayStore();
    setHoliday(data);
  } catch (error) {
    console.log(error);
  }
};
