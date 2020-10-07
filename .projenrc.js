const { TypeScriptProject } = require('projen');

const project = new TypeScriptProject({
  name: "markmac",
  releaseToNpm: true,
  authorName: "Elad Ben-Israel",
  repository: "https://github.com/eladb/markmac.git",
  authorEmail: "elad.benisrael@gmail.com",
  bin: {
    'markmac': 'lib/cli.js'
  },
  devDeps: [
    'memory-streams'
  ],
});

project.synth();
