import { component$ } from "@builder.io/qwik"
import type { DocumentHead } from "@builder.io/qwik-city";
import { CompanyData } from "~/components/Company/CompanyData";
import { Header } from "~/components/Header/index";


export default component$(() => {


    return (
        <section class="w-full ">
            <Header />
            {/* <h2 class="font-bold">DATOS DE EMPRESA</h2> */}
            <article class="m-4 p-4">
                <CompanyData />
            </article>
        </section>
    );
});

export const head: DocumentHead = {
    title: "HMR online",
};
