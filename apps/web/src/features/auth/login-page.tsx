import { useNavigate, useSearch } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { authClient } from "@/lib/auth/client";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { redirect } = useSearch({ from: "/login" });
  const [message, setMessage] = useState<string | null>(null);
  const [pending, setPending] = useState<boolean>(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage(null);
    setPending(true);

    const formData = new FormData(event.currentTarget);
    const { error } = await authClient.signIn.email({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    });

    setPending(false);

    if (error) {
      setMessage(error.message ?? "login failed");

      return;
    }

    await navigate({ href: redirect ?? "/" });
  };

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input type="email" name="email" autoComplete="username" required />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </label>

        {message && <p role="alert">{message}</p>}

        <button type="submit" disabled={pending}>
          Login
        </button>
      </form>
    </main>
  );
};
