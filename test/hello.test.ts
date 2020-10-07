import * as fs from 'fs';
import * as ms from 'memory-streams';
import { mdmacro } from '../src';

test('happy flow', async () => {
  const output = new ms.WritableStream();
  const input = fs.createReadStream(`${__dirname}/happy.md`);
  await mdmacro(input, output);
  expect(output.toString()).toMatchSnapshot();
});

