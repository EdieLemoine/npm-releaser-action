const baseConfig = require('@myparcel/semantic-release-config/github');

module.exports = {
  extends: '@myparcel/semantic-release-config/github',
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    [
      '@saithodev/semantic-release-backmerge', {
        branchName: [{ from: 'main', to: 'develop' }],
        message: 'chore(release): rebase published changes [skip ci]',
        clearWorkspace: true,
      },
    ],
  ],
};
