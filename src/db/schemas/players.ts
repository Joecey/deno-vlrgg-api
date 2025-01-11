/*
Schema for Railway database
*/

import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const players = pgTable('players', {
  id: serial().primaryKey().notNull(),
  ignName: text('ign_name').notNull(),
  socialMedia: text('social_media').array(),
  country: text(),
  teams: text().array(), // postgres supports arrays - switch to jsonb worse case
  dateCreated: timestamp('date_created', { mode: 'string' }).defaultNow(), // here, we say that the column in the database is called 'date_created', but we want to refer to it as 'dateCreated' in our code
});
