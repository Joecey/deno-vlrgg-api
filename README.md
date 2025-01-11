# DENO vlr.gg API

Unofficial API for the vlr.gg website with cron jobs to update PostgresSQL DB

## Technologies

- Deno + Typescript
- Hono (for custom path parameters and middleware)
- PostgresSQL
- Drizzle ORM
- Deployed with Railway
- Puppeteer for cron job scraping

## TODO
- [ ] setup Postrgres with dizzle
- [ ] ensure hono setup works with mock data\
- [ ] setup a manual script to scrape vlr.gg website
- [ ] create a cron job to get updates (start with highest vlr rating players)


## Performing Migrations with drizzle
1. Define schemas in `db/schemas`
2. Create migration files using `deno run drizzle:generate` 
3. Perform migration with generated SQL files using `deno run drizzle:migrate`
