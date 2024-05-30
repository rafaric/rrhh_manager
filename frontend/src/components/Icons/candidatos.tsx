import { component$ } from "@builder.io/qwik";

export const Candidatos = component$(({ active }: { active: boolean }) => {
  return (
    <svg
      class={{ "is-active-icon": active }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="10"
        cy="17.5"
        rx="7"
        ry="3.5"
        stroke="#16151C"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <circle
        cx="10"
        cy="7"
        r="4"
        stroke="#16151C"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.0448 10.2496C14.7228 10.7485 14.3288 11.1965 13.8774 11.5791C14.2319 11.6901 14.609 11.75 15.0001 11.75C17.0712 11.75 18.7501 10.0711 18.7501 7.99999C18.7501 6.04422 17.2529 4.43814 15.3421 4.26538C15.6083 4.78435 15.8011 5.34717 15.9068 5.94015C16.6979 6.28887 17.2501 7.07994 17.2501 7.99999C17.2501 9.2277 16.2668 10.2257 15.0448 10.2496Z"
        fill="#16151C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.9997 17.5563C18.9896 18.1705 18.8148 18.7606 18.5009 19.3108C18.8693 19.2095 19.2144 19.092 19.5312 18.96C20.1284 18.7112 20.6606 18.3959 21.055 18.0074C21.452 17.6162 21.7501 17.1064 21.7501 16.5C21.7501 15.8935 21.452 15.3837 21.055 14.9925C20.6606 14.604 20.1284 14.2887 19.5312 14.0399C18.5086 13.6138 17.1907 13.3394 15.7495 13.2683C16.7517 13.7774 17.5702 14.4169 18.1351 15.1443C18.4329 15.2274 18.7072 15.3215 18.9543 15.4245C19.443 15.6281 19.7894 15.8514 20.0023 16.0611C20.2125 16.2682 20.2501 16.416 20.2501 16.5C20.2501 16.5839 20.2125 16.7317 20.0023 16.9388C19.7961 17.1419 19.4645 17.3579 18.9997 17.5563Z"
        fill="#16151C"
      />
    </svg>
  );
});