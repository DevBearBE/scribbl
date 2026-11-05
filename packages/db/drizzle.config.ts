import { defineConfig } from "drizzle-kit";

process.loadEnvFile(".env.local");

export default defineConfig({
  schema: "./src/schemas/**/*.ts",
  out: "./src/migrations",
  dialect: "postgresql",
  dbCredentials: {
    // biome-ignore lint/style/noNonNullAssertion: required env var
    url: process.env.DATABASE_URL!,
  },
});
