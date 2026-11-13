import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db, schema } from "@scribbl/db";
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg", schema }),
  emailAndPassword: { enabled: true, disableSignUp: true },
  trustedOrigins: ["http://localhost:5173"],
});
