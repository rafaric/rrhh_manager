import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ReactComponent } from "~/integrations/react/ReactComponent";
export default component$(() => {
  return (
    <>
      <ReactComponent />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};
