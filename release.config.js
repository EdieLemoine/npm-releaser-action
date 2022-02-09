const baseConfig = require('@myparcel/semantic-release-config');
const { addReleaseNotesGeneratorPlugin } = require('@myparcel/semantic-release-config/src/plugins');

module.exports = {
  extends: '@myparcel/semantic-release-config',
  ...baseConfig,
  plugins: [
    ['@edielemoine/semantic-release-svn', { url: 'https://plugins.svn.wordpress.org/woocommerce-myparcel' }],

    // addReleaseNotesGeneratorPlugin({
    //   presetConfig: {
    //     header: 'Changes',
    //     commitsSort: ['scope', 'subject'],
    //     types: [
    //       {
    //         type: 'feat',
    //         section: ':sparkles: New Features',
    //       },
    //       {
    //         type: 'fix',
    //         section: ':bug: Bug Fixes',
    //       },
    //       {
    //         type: 'perf',
    //         section: ':zap: Performance Improvements',
    //       },
    //       {
    //         type: 'refactor',
    //         section: ':broom: Refactors',
    //       },
    //       {
    //         type: 'docs',
    //         section: ':books: Documentation',
    //       },
    //       {
    //         type: 'revert',
    //         section: ':rewind: Reverts',
    //       },
    //       {
    //         type: 'chore',
    //         hidden: true,
    //       },
    //       {
    //         type: 'style',
    //         hidden: true,
    //       },
    //       {
    //         type: 'test',
    //         hidden: true,
    //       },
    //     ],
    //   },
    // }),
    // [
    //   '@saithodev/semantic-release-backmerge', {
    //   branches: [{ from: 'main', to: 'develop' }],
    //   message: 'chore(release): rebase published changes [skip ci]',
    //   mergeMode: 'ours',
    //   clearWorkspace: true,
    // },
    // ],
  ],
};
