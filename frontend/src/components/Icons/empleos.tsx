import { component$ } from "@builder.io/qwik";

export const Empleos = component$(({ active }: { active: boolean }) => {
  return (
    <svg
      class={{ "is-active-icon": active }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6M2 10.3475C2 10.3475 5.11804 12.4244 9.97767 12.9109M22 10.3475C22 10.3475 18.882 12.4244 14.0223 12.9109M6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6H6C3.79086 6 2 7.79086 2 10V18C2 20.2091 3.79086 22 6 22Z"
        stroke="#16151C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M14 12.1599V13.1599C14 13.1699 14 13.1699 14 13.1799C14 14.2699 13.99 15.1599 12 15.1599C10.02 15.1599 10 14.2799 10 13.1899V12.1599C10 11.1599 10 11.1599 11 11.1599H13C14 11.1599 14 11.1599 14 12.1599Z"
        stroke="#16151C"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
