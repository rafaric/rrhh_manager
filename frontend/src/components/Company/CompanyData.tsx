import { component$, useStore } from "@builder.io/qwik";


export const CompanyData = component$(() => {

    interface CompanyData {
        nombre: string,
        direccion: string,
        telefono: number,
        email: string,
        rubro: string
    }

    const store = useStore<CompanyData>({
        nombre: "Builder.io",
        direccion: "Calle 1 # 1-1",
        telefono: 123456789,
        email: "builder.io@builder.io",
        rubro: "Software"
    })

    // const fetchCompanyData = async () => {
    //     const response = await fetch('')
    //     const data = await response.json()
    //     Object.assign(store,data)
    // }

    // fetchCompanyData()

    return (
        <div class="flex justify-center items-center h-screen text-dark">
            <div class="w-3/4 bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
                <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-t-lg flex justify-center">
                    <h2 class="text-3xl font-bold">DATOS DE EMPRESA</h2>
                </div>
                <div class="mt-8">
                    <div class="grid grid-cols-1 gap-4">
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Nombre:</h3>
                            <p class="text-gray-600">{store.nombre}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Dirección:</h3>
                            <p class="text-gray-600">{store.direccion}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Teléfono:</h3>
                            <p class="text-gray-600">{store.telefono}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Email:</h3>
                            <p class="text-gray-600">{store.email}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-700 mb-2">Rubro:</h3>
                            <p class="text-gray-600">{store.rubro}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-8 flex justify-center">
                    <a
                        href="/editar"
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
