import { execSync } from 'child_process';
import * as readline from 'readline';

/**
 * Reads markdown with `<!-- <macro exec="COMMAND"> -->` annotations from
 * `input`, expands it by executing `COMMAND` and writes to `output`.
 */
export async function markmac(input: NodeJS.ReadableStream = process.stdin, output: NodeJS.WritableStream = process.stdout) {
  const BEGIN_RE = /^<!-- <macro exec="(.*)"> -->$/;
  const END_RE = /^<!-- <\/macro> -->$/;

  let currentMacro: string | undefined;

  const ifc = readline.createInterface(input);
  ifc.on('line', line => {
    const begin = BEGIN_RE.exec(line);
    const end = END_RE.exec(line);

    if (!currentMacro) {
      output.write(line);
      output.write('\n');
      if (begin) {
        currentMacro = begin[1];
        const stdout = execSync(currentMacro);
        output.write(stdout);
      }
    } else {
      if (end) {
        currentMacro = undefined;
        output.write(line);
        output.write('\n');
      }
    }
  });

  return new Promise(done => {
    ifc.on('close', done);
  });
}
