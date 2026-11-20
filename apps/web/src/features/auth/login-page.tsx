import {
  Button,
  Form,
  Heading,
  Input,
  LogoMark,
  PasswordInput,
} from "@scribbl/ui";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { authClient } from "@/lib/auth/client";

type LoginFormPayload = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState<boolean>(false);

  const onSubmit = async ({ email, password }: LoginFormPayload) => {
    setMessage(null);
    setPending(true);

    const { error } = await authClient.signIn.email({ email, password });

    setPending(false);

    if (error) {
      setMessage(error.message ?? "login failed");

      return;
    }

    await navigate({ to: "/" });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <section className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex flex-col items-center gap-3">
          <LogoMark />
          <Heading>Login</Heading>
          <p className="text-sm text-neutral-500">
            Sign in to access your notes
          </p>
        </div>

        <Form<LoginFormPayload>
          onFormSubmit={onSubmit}
          className="flex flex-col gap-5"
        >
          <Input
            type="email"
            name="email"
            label="Email"
            leadingIcon="mail"
            autoComplete="username"
            required
          />

          <PasswordInput
            name="password"
            label="Password"
            autoComplete="current-password"
            required
          />

          {message && (
            <p
              role="alert"
              className="rounded-lg border border-danger-200 bg-danger-50 px-3 py-2 text-sm text-danger-700"
            >
              {message}
            </p>
          )}

          <Button
            type="submit"
            disabled={pending}
            className="w-full disabled:opacity-60"
          >
            Login
          </Button>
        </Form>
      </section>
    </main>
  );
};
