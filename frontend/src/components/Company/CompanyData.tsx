import { component$, useStore } from "@builder.io/qwik";


export const CompanyData = component$(() => {

    interface CompanyData {
        name: string,
        cuit: number
        webSite: string
        city: string
        country: string
        address: string,
        phone: number,
        email: string,
        sector: string
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
        sector: "Software"
    })

    // const fetchCompanyData = async () => {
    //     const response = await fetch('')
    //     const data = await response.json()
    //     Object.assign(store,data)
    // }

    // fetchCompanyData()

    return (
        <div class="flex justify-center items-center h-screen text-dark">
            <div class="w-3/4 bg-light bg-opacity-80 rounded-lg shadow-xl p-8">
                <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-t-lg flex justify-center">
                    <h2 class="text-3xl font-bold">DATOS DE EMPRESA</h2>
                </div>
                <div class="mt-8">
                    <div class="grid grid-cols-1 gap-4">
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Nombre:</h3>
                            <p class="text-gray-600">{store.name}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Dirección:</h3>
                            <p class="text-gray-600">{store.address}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Ciudad:</h3>
                            <p class="text-gray-600">{store.city}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Pais:</h3>
                            <p class="text-gray-600">{store.country}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Sitio web:</h3>
                            <p class="text-gray-600">{store.webSite}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Email:</h3>
                            <p class="text-gray-600">{store.email}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">CUIT:</h3>
                            <p class="text-gray-600">{store.cuit}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Teléfono:</h3>
                            <p class="text-gray-600">{store.phone}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Sector:</h3>
                            <p class="text-gray-600">{store.sector}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-8 flex justify-center">
                    <a
                        href="/datos-empresa/editar"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                            />
                        </svg>
                        Editar
                    </a>
                </div>
            </div>
        </div>

    )
})
