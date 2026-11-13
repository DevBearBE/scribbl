import { defineRelations } from "drizzle-orm";
import { account, session, user, verification } from "./auth.ts";

export const schema = {
  account,
  session,
  user,
  verification,
};

export const relations = defineRelations(schema, (relation) => ({
  user: {
    sessions: relation.many.session({
      from: relation.user.id,
      to: relation.session.userId,
    }),
    accounts: relation.many.account({
      from: relation.user.id,
      to: relation.account.userId,
    }),
  },
  session: {
    user: relation.one.user({
      from: relation.session.userId,
      to: relation.user.id,
    }),
  },
  account: {
    user: relation.one.user({
      from: relation.account.userId,
      to: relation.user.id,
    }),
  },
}));
