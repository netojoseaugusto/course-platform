import { env } from "./src/data/env/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  strict: true,
  verbose: true,
  dialect: "postgresql",
  dbCredentials: {
    password: env.DATABASE_PASSWORD,
    user: env.DATABASE_USER,
    database: env.DATABASE_NAME,
    host: env.DATABASE_HOST,
    ssl: false,
  },
});
