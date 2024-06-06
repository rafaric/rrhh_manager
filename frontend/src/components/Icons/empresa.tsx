import { component$ } from "@builder.io/qwik";

export const Empresa = component$(({ active }: { active: boolean }) => {
    return (
        <svg
        class={{ "is-active-icon": active }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H10M12 12H16M14 17H16M8 17H12M10 11V13M14 16V18M16.1804 22H7.81965C5.5109 22 3.6393 20.214 3.6393 18.0108V13.133C3.6393 12.4248 3.34447 11.7456 2.81969 11.2448C1.60381 10.0845 1.76187 8.16205 3.15251 7.19692L9.54124 2.763C11.0071 1.74567 12.9929 1.74567 14.4588 2.763L20.8475 7.19691C22.2381 8.16205 22.3962 10.0845 21.1803 11.2448C20.6555 11.7456 20.3607 12.4248 20.3607 13.133V18.0108C20.3607 20.214 18.4891 22 16.1804 22Z"
            stroke="#28303F"
            stroke-width="1.5"
            stroke-linecap="round" />
        </svg>
    );
});
