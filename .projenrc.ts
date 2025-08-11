import { CdklabsTypeScriptProject } from 'cdklabs-projen-project-types';

const project = new CdklabsTypeScriptProject({
  setNodeEngineVersion: false,
  stability: 'stable',
  private: false,
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
  enablePRAutoMerge: true,
});

project.synth();
