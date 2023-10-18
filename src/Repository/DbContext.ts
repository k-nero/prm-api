import { drizzle } from 'drizzle-orm/libsql';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { createClient } from '@libsql/client';
  
const client = createClient({ url: process.env.DATABASE_URL || "default", authToken: process.env.TURSO_AUTH_TOKEN });
const db = drizzle(client);
await migrate(db, {migrationsFolder: "./src/Repository/Migration"});
export default db;