import { component$ } from "@builder.io/qwik";

export const Nomina = component$(({ active }: { active: boolean }) => {
  return (
    <svg
      class={{ "is-active-icon": active }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="#16151C" stroke-width="1.5" />
      <path
        d="M14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12"
        stroke="#16151C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14"
        stroke="#16151C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M12 6.5V8"
        stroke="#16151C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 16V17.5"
        stroke="#16151C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
