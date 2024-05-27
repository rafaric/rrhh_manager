// src/components/EditCompanyForm.tsx
import { component$, useStore } from '@builder.io/qwik';
import { Form, z, zx } from '@builder.io/qwik-city';

interface CompanyData {
    nombre: string;
    direccion: string;
    telefono: number;
    email: string;
    rubro: string;
}

export const schema = z.object({
    nombre: z.string().min(1, 'El nombre es requerido'),
    direccion: z.string().min(1, 'La dirección es requerida'),
    telefono: z.string().min(1, 'El teléfono es requerido'),
    email: z.string().email('El correo electrónico no es válido'),
    rubro: z.string().min(1, 'El rubro es requerido'),
});

export default component$(() => {
    const store = useStore<CompanyData>({
        nombre: '',
        direccion: '',
        telefono: 1154781122,
        email: '',
        rubro: '',
    });

    const handleSubmit = async (event: SubmitEvent) => {
        event.preventDefault();

        // Aquí enviarías los datos a la API externa
        const response = await fetch('/api/empresa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(store),
        });

        if (response.ok) {
            // Redirecciona a la vista de CompanyCard después de enviar los datos
            window.location.href = '/datos-empresa';
        } else {
            console.error('Error al enviar los datos');
        }
    };

    return (
        <Form
            action="/api/empresa"
            method="post"
            onSubmit$={handleSubmit}
            class="max-w-md mx-auto"
            schema={schema}
        >
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="nombre">
                    Nombre
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nombre"
                    type="text"
                    bind:value={store.nombre}
                    placeholder="Nombre de la empresa"
                />
                <Form.Error nombre="nombre" />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="direccion">
                    Dirección
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="direccion"
                    type="text"
                    bind:value={store.direccion}
                    placeholder="Dirección de la empresa"
                />
                <Form.Error nombre="direccion" />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="phone">
                    Teléfono
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    bind:value={store.phone}
                    placeholder="Teléfono de la empresa"
                />
                <Form.Error nombre="phone" />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                    Correo electrónico
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    bind:value={store.email}
                    placeholder="Correo electrónico de la empresa"
                />
                <Form.Error nombre="email" />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="rubro">
                    Rubro
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="rubro"
                    type="text"
                    bind:value={store.rubro}
                    placeholder="Rubro de la empresa"
                />
                <Form.Error nombre="rubro" />
            </div>

            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Guardar cambios
                </button>
            </div>
        </Form>
    );
});



