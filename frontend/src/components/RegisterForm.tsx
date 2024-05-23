import type { QRL } from "@builder.io/qwik";
import { $, component$ } from "@builder.io/qwik";
import type { SubmitHandler } from "@modular-forms/qwik";
import { email, minLength, required, useForm } from "@modular-forms/qwik";
type RegisterForm = {
  name: string;
  email: string;
  password: string;
};

export default component$(() => {
  const [, { Form, Field }] = useForm<RegisterForm>({
    loader: {
      value: {
        email: "",
        password: "",
        name: "",
      },
    },
  });
  const handleSubmit: QRL<SubmitHandler<RegisterForm>> = $((values) => {
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    // Runs on client
  });
  return (
    <Form onSubmit$={handleSubmit} class="m-auto flex flex-col gap-3">
      <Field
        name="name"
        validate={[required<string>("Please enter your name.")]}
      >
        {(field, props) => (
          <>
            <input
              class="rounded-xl border border-light p-2"
              {...props}
              type="name"
              value={field.value}
            />
            {field.error && <div>{field.error}</div>}
          </>
        )}
      </Field>
      <Field
        name="email"
        validate={[
          required<string>("Please enter your email."),
          email("The email address is badly formatted."),
        ]}
      >
        {(field, props) => (
          <>
            <input
              class="rounded-xl border border-light p-2"
              {...props}
              type="email"
              value={field.value}
            />
            {field.error && <div>{field.error}</div>}
          </>
        )}
      </Field>
      <Field
        name="password"
        validate={[
          minLength(8, "You password must have 8 characters or more."),
          required<string>("Please enter your password."),
        ]}
      >
        {(field, props) => (
          <>
            <input
              class="rounded-xl border border-light p-2"
              {...props}
              type="password"
              value={field.value}
            />
            {field.error && <div>{field.error}</div>}
          </>
        )}
      </Field>
      <button
        class="btn rounded-xl bg-primary p-2 font-bold text-light"
        type="submit"
      >
        Registerse
      </button>
    </Form>
  );
});
