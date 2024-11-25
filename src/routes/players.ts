import { Hono } from 'jsr:@hono/hono';

const player = new Hono();
player.get('/', (ctx) => ctx.text('List players'));

// c in this case stands for context
player.get('/:id', (ctx) => {
  const id = ctx.req.param('id');
  return ctx.text(`Get player with id ${id}`);
});

export default player;
