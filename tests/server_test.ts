import { assertEquals } from '@std/assert';

const baseUrl = 'http://localhost:8000/';

Deno.test('basic server health', async () => {
  const res = await fetch(baseUrl);
  const resBody = await res.text();
  console.log(resBody);
  assertEquals(resBody, 'Unofficial vlr.gg API');
});
