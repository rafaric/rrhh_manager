import { $, component$, NoSerialize, noSerialize, useStore } from "@builder.io/qwik"

type CompanyFields = {
    name: string
    cuit: number
    webSite: string
    city: string
    country: string
    address: string
    phone: string
    email: string
    sector: string
}

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
        sector: ""
    })

    const handleSubmit = async (event: SubmitEvent) => {
        event.preventDefault()
        try {
            await fetch('/api/company', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(store),
            })
            const newStore = Object.keys(store).map((key) => ({ [key]: "" }));
            Object.assign(store, ...newStore);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit$={handleSubmit} class="max-w-md mx-auto">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                    Nombre de la empresa
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Ingresa el nombre de la empresa"
                    value={store.name}
                    onInput$={(ev) => (store.name = (ev.target as HTMLInputElement).value)}
                    required
                />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="cuit">
                    CUIT
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cuit"
                    type="number"
                    placeholder="Ingresa el CUIT de la empresa"
                    value={store.cuit}
                    onInput$={(ev) => (store.cuit = Number((ev.target as HTMLInputElement).value))}
                    required
                />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="webSite">
                    Sitio web
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="webSite"
                    type="text"
                    placeholder="Ingresa el sitio web de la empresa"
                    value={store.webSite}
                    onInput$={(ev) => (store.webSite = (ev.target as HTMLInputElement).value)}
                />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="city">
                    Ciudad
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    placeholder="Ingresa la ciudad de la empresa"
                    value={store.city}
                    onInput$={(ev) => (store.city = (ev.target as HTMLInputElement).value)}
                    required
                />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="country">
                    País
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="country"
                    type="text"
                    placeholder="Ingresa el país de la empresa"
                    value={store.country}
                    onInput$={(ev) => (store.country = (ev.target as HTMLInputElement).value)}
                    required
                />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="address">
                    Dirección
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Ingresa la dirección de la empresa"
                    value={store.address}
                    onInput$={(ev) => (store.address = (ev.target as HTMLInputElement).value)}
                    required
                />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="phone">
                    Teléfono
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="tel"
                    placeholder="Ingresa el teléfono de la empresa"
                    value={store.phone}
                    onInput$={(ev) => (store.phone = (ev.target as HTMLInputElement).value)}
                    required
                />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Ingresa el email de la empresa"
                    value={store.email}
                    onInput$={(ev) => (store.email = (ev.target as HTMLInputElement).value)}
                    required
                />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="sector">
                    Sector
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="sector"
                    type="text"
                    placeholder="Ingresa el sector de la empresa"
                    value={store.sector}
                    onInput$={(ev) => (store.sector = (ev.target as HTMLInputElement).value)}
                    required
                />
            </div>

            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Crear empresa
                </button>
            </div>
        </form>
    )
})



