import { drizzle } from "drizzle-orm/node-postgres";
import { relations, schema } from "./schemas/relations.ts";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is not set");

export { schema };
export const db = drizzle({ connection: url, relations });
