const { TypeScriptProject } = require('projen');

const project = new TypeScriptProject({
  name: 'markmac',
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
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
  autoApproveOptions: {
    allowedUsernames: ['aws-cdk-automation'],
    secret: 'GITHUB_TOKEN',
  },
  autoApproveUpgrades: true,
  defaultReleaseBranch: 'master',
});

project.synth();
