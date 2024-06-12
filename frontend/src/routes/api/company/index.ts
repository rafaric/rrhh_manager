import type { RequestHandler } from "@builder.io/qwik-city";

interface CompanyData {
  name: string;
  cuit: number;
  webSite: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  sector: string;
}

export const onRequest: RequestHandler = async ({ request, json }) => {
  const body: CompanyData = await request.json();
  console.log(body);

  try {
    const res = await fetch(
      "https://backup-s15-04-t-node-react.onrender.com/api/v1/companys/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );
    const { message } = await res.json();
    json(res.status, message);
  } catch (error) {
    console.log(error);
  }
};
