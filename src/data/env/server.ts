import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_PASSWORD: z.string().min(1),
    DATABASE_USER: z.string().min(1),
    DATABASE_NAME: z.string().min(1),
    DATABASE_HOST: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
    CLERK_WEBHOOK_SECRET: z.string().min(1),
  },
  experimental__runtimeEnv: process.env,
});
