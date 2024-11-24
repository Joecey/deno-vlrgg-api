import { Hono } from 'jsr:@hono/hono';

// runtime with deno, but use Hono for a nice web server experience

// TODO: create db with drizzle plus connect
// TODO: create helper in a db folder or utils??
// TODO: typegen??
// TODO: cron jobs to update db

const app = new Hono();

app.get('/', (c) => c.text('Unofficial vlr.gg API'));

Deno.serve(app.fetch);
