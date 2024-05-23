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
      .then(() => location.reload());
    // Runs on client
  });
  return (
    <Form
      onSubmit$={handleSubmit}
      class="m-auto flex max-w-xs flex-grow flex-col gap-3"
    >
      <Field
        name="name"
        validate={[required<string>("Please enter your name.")]}
      >
        {(field, props) => (
          <label class="rounded-xl border border-light p-2">
            <p class="text-xs">Nombre</p>
            <input class="w-full" {...props} type="name" value={field.value} />
            {field.error && <div>{field.error}</div>}
          </label>
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
          <label class="rounded-xl border border-light p-2">
            <p class="text-xs">Email</p>
            <input class="w-full" {...props} type="email" value={field.value} />
            {field.error && <div>{field.error}</div>}
          </label>
        )}
      </Field>
      <Field
        name="password"
        validate={[
          minLength(6, "You password must have 6 characters or more."),
          required<string>("Please enter your password."),
        ]}
      >
        {(field, props) => (
          <label class="rounded-xl border border-light p-2">
            <p class="text-xs">Contraseña</p>
            <input
              class="w-full"
              {...props}
              type="password"
              value={field.value}
            />
            {field.error && <div>{field.error}</div>}
          </label>
        )}
      </Field>
      <button
        class="btn rounded-xl bg-primary p-2 font-bold text-light"
        type="submit"
      >
        Registrarse
      </button>
    </Form>
  );
});
