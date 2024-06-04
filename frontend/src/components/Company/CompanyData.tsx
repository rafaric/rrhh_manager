import { component$, useStore } from "@builder.io/qwik";

export const CompanyData = component$(() => {
  interface CompanyData {
    name: string;
    cuit: number;
    webSite: string;
    city: string;
    country: string;
    address: string;
    phone: number;
    email: string;
    sector: string;
  }

  const store = useStore<CompanyData>({
    name: "Builder.io",
    cuit: 20541230229,
    webSite: "www.google.com",
    city: "California",
    country: "United States",
    address: "Calle 1 # 1-1",
    phone: 123456789,
    email: "builder.io@builder.io",
    sector: "Software",
  });

  // const fetchCompanyData = async () => {
  //     const response = await fetch('/api/company')
  //     const data = await response.json()
  //     Object.assign(store,data)
  // }

  // fetchCompanyData()

  return (
    <div class="flex min-h-fit min-w-fit flex-col justify-center rounded-lg border border-gray/30 px-4 py-6">
      <div class="from-blue-500 to-purple-500 text-white flex justify-center rounded-t-lg bg-gradient-to-r px-6 py-4">
        <h2 class="text-3xl font-bold">DATOS DE EMPRESA</h2>
      </div>
      <div class="mx-auto mt-8">
        <div class="grid grid-cols-2 gap-4">
          <div class="w-[400px]">
            <h3 class="text-gray-700 mb-2 text-lg font-bold">Nombre:</h3>
            <p class="text-gray-600">{store.name}</p>
          </div>
          <div class="w-[400px]">
            <h3 class="text-gray-700 mb-2 text-lg font-bold">Dirección:</h3>
            <p class="text-gray-600">{store.address}</p>
          </div>
          <div class="w-[400px]">
            <h3 class="text-gray-700 mb-2 text-lg font-bold">Ciudad:</h3>
            <p class="text-gray-600">{store.city}</p>
          </div>
          <div class="w-[400px]">
            <h3 class="text-gray-700 mb-2 text-lg font-bold">Pais:</h3>
            <p class="text-gray-600">{store.country}</p>
          </div>
          <div class="w-[400px]">
            <h3 class="text-gray-700 mb-2 text-lg font-bold">Sitio web:</h3>
            <p class="text-gray-600">{store.webSite}</p>
          </div>
          <div class="w-[400px]">
            <h3 class="text-gray-700 mb-2 text-lg font-bold">Email:</h3>
            <p class="text-gray-600">{store.email}</p>
          </div>
          <div class="w-[400px]">
            <h3 class="text-gray-700 mb-2 text-lg font-bold">CUIT:</h3>
            <p class="text-gray-600">{store.cuit}</p>
          </div>
          <div class="w-[400px]">
            <h3 class="text-gray-700 mb-2 text-lg font-bold">Teléfono:</h3>
            <p class="text-gray-600">{store.phone}</p>
          </div>
          <div class="w-[400px]">
            <h3 class="text-gray-700 mb-2 text-lg font-bold">Sector:</h3>
            <p class="text-gray-600">{store.sector}</p>
          </div>
        </div>
      </div>

      <button class="mt-8 flex w-fit justify-center self-center rounded-lg hover:border hover:border-primary700 hover:bg-gray">
        <a
          href="/empresa/editar"
          class="bg-blue-500 hover:bg-blue-700 text-white flex items-center rounded-lg px-4 py-2 font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Editar
        </a>
      </button>
    </div>
  );
});
