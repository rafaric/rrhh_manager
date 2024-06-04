import { $, component$, useStore } from "@builder.io/qwik";

type CompanyFields = {
  name: string;
  cuit: number;
  webSite: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  sector: string;
};

export const CompanyEditForm = component$(() => {
  const store = useStore<CompanyFields>({
    name: "",
    cuit: 0,
    webSite: "",
    city: "",
    country: "",
    address: "",
    phone: "",
    email: "",
    sector: "",
  });

  const handleSubmit = $(async (event: SubmitEvent) => {
    event.preventDefault();
    try {
      await fetch("/api/company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(store),
      });
      const newStore = Object.keys(store).map((key) => ({ [key]: "" }));
      Object.assign(store, ...newStore);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form
      onSubmit$={handleSubmit}
      class="flex min-h-fit min-w-fit flex-col justify-center rounded-lg border border-gray/30 px-20 py-6"
    >
      <div class="mb-6">
        <h2 class="text-3xl font-bold"> Edita los datos de tu empresa</h2>
      </div>
      <div class="mb-4">
        <label class="text-gray-700 mb-2 block font-bold" for="name">
          Nombre de la empresa
        </label>
        <input
          class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="name"
          type="text"
          placeholder="Ingresa el nombre de la empresa"
          value={store.name}
          onInput$={(ev) =>
            (store.name = (ev.target as HTMLInputElement).value)
          }
          required
        />
      </div>

      <div class="mb-4">
        <label class="text-gray-700 mb-2 block font-bold" for="cuit">
          CUIT
        </label>
        <input
          class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="cuit"
          type="number"
          placeholder="Ingresa el CUIT de la empresa"
          value={store.cuit}
          onInput$={(ev) =>
            (store.cuit = Number((ev.target as HTMLInputElement).value))
          }
          required
        />
      </div>

      <div class="mb-4">
        <label class="text-gray-700 mb-2 block font-bold" for="webSite">
          Sitio web
        </label>
        <input
          class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="webSite"
          type="text"
          placeholder="Ingresa el sitio web de la empresa"
          value={store.webSite}
          onInput$={(ev) =>
            (store.webSite = (ev.target as HTMLInputElement).value)
          }
        />
      </div>

      <div class="mb-4">
        <label class="text-gray-700 mb-2 block font-bold" for="city">
          Ciudad
        </label>
        <input
          class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="city"
          type="text"
          placeholder="Ingresa la ciudad de la empresa"
          value={store.city}
          onInput$={(ev) =>
            (store.city = (ev.target as HTMLInputElement).value)
          }
          required
        />
      </div>

      <div class="mb-4">
        <label class="text-gray-700 mb-2 block font-bold" for="country">
          País
        </label>
        <input
          class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="country"
          type="text"
          placeholder="Ingresa el país de la empresa"
          value={store.country}
          onInput$={(ev) =>
            (store.country = (ev.target as HTMLInputElement).value)
          }
          required
        />
      </div>

      <div class="mb-4">
        <label class="text-gray-700 mb-2 block font-bold" for="address">
          Dirección
        </label>
        <input
          class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="address"
          type="text"
          placeholder="Ingresa la dirección de la empresa"
          value={store.address}
          onInput$={(ev) =>
            (store.address = (ev.target as HTMLInputElement).value)
          }
          required
        />
      </div>

      <div class="mb-4">
        <label class="text-gray-700 mb-2 block font-bold" for="phone">
          Teléfono
        </label>
        <input
          class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="phone"
          type="tel"
          placeholder="Ingresa el teléfono de la empresa"
          value={store.phone}
          onInput$={(ev) =>
            (store.phone = (ev.target as HTMLInputElement).value)
          }
          required
        />
      </div>

      <div class="mb-4">
        <label class="text-gray-700 mb-2 block font-bold" for="email">
          Email
        </label>
        <input
          class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="email"
          type="email"
          placeholder="Ingresa el email de la empresa"
          value={store.email}
          onInput$={(ev) =>
            (store.email = (ev.target as HTMLInputElement).value)
          }
          required
        />
      </div>

      <div class="mb-4">
        <label class="text-gray-700 mb-2 block font-bold" for="sector">
          Sector
        </label>
        <input
          class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
          id="sector"
          type="text"
          placeholder="Ingresa el sector de la empresa"
          value={store.sector}
          onInput$={(ev) =>
            (store.sector = (ev.target as HTMLInputElement).value)
          }
          required
        />
      </div>

      <button
        class="mt-8 flex w-fit justify-center self-center rounded-lg px-4 py-2 font-bold hover:border hover:border-primary700 hover:bg-gray"
        type="submit"
      >
        Crear empresa
      </button>
    </form>
  );
});
