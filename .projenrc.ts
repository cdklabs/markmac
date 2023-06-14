import { typescript } from 'projen';

const project = new typescript.TypeScriptProject({
  name: 'markmac',
  projenrcTs: true,
  releaseToNpm: true,
  authorName: 'Elad Ben-Israel',
  repository: 'https://github.com/eladb/markmac.git',
  authorEmail: 'elad.benisrael@gmail.com',
  bin: {
    markmac: 'lib/cli.js',
  },
  devDeps: [
    'memory-streams',
  ],
  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  defaultReleaseBranch: 'main',
});

project.synth();
