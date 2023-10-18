import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/Repository/Entities/*",
  out: "./src/Repository/Migration",
  driver: "turso",
  verbose: true,
  dbCredentials: {
    url: process.env.DATABASE_URL || "null",
    authToken: process.env.TURSO_AUTH_TOKEN
  }
} satisfies Config