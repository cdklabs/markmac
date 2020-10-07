const { TypeScriptProject } = require('projen');

const project = new TypeScriptProject({
  name: "mdmacro",
  releaseToNpm: true,
  authorName: "Elad Ben-Israel",
  repository: "https://github.com/eladb/projen.git",
  authorEmail: "elad.benisrael@gmail.com",
  bin: {
    'mdmacro': 'lib/cli.js'
  },
  devDeps: [
    'memory-streams'
  ],
});

project.addBuildCommand('cat README.md | node lib/cli.js > README.md')

project.synth();
