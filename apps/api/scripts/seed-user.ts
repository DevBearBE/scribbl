import { auth } from "../server/utils/auth.ts";

const [email, password, name = "Scribbl"] = process.argv.slice(2);

if (!email || !password) {
  console.error("usage: pnpm seed:user <email> <password> [name]");
  process.exit(1);
}

const ctx = await auth.$context;
const user = await ctx.internalAdapter.createUser(
  { email, name },
  { method: "email-password" },
);
await ctx.internalAdapter.linkAccount({
  userId: user.id,
  providerId: "credential",
  accountId: user.id,
  password: await ctx.password.hash(password),
});

console.log(`created ${email}`);
process.exit(0);
