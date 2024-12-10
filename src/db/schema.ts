/*
Schema for Railway database
*/

import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const players = pgTable('players', {
  id: serial().primaryKey().notNull(),
  name: text(),
  description: text(),
});
