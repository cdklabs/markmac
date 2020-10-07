import * as fs from 'fs';
import * as ms from 'memory-streams';
import { markmac } from '../src';

test('happy flow', async () => {
  const output = new ms.WritableStream();
  const input = fs.createReadStream(`${__dirname}/happy.md`);
  await markmac(input, output);
  expect(output.toString()).toMatchSnapshot();
});

