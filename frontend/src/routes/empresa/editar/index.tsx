import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city";
import { CompanyEditForm } from "~/components/Company/CompanyEditForm";
import { Header } from "~/components/Header";


export default component$(() => {

    return (
        <section class="w-full">
            <Header />
            {/* <h2 class="font-bold">DATOS DE EMPRESA</h2> */}
            <article class="m-4 p-4">
                <CompanyEditForm />
            </article>
        </section>
    );
});

export const head: DocumentHead = {
    title: "HMR online",
};
