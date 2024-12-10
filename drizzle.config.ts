/**
 * These config settings determine:
 *
 * - where to output migration files (`./drizzle`)
 * - where to find your schema definition (`./src/db/schema.ts`)
 * - that PostgreSQL is your database dialect, and
 * - how to connect to your database using the URL stored in your environment variables
 */

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: Deno.env.get('DATABASE_URL')!,
  },
});
