const baseConfig = require('@myparcel/semantic-release-config');
const { addGitPlugin, addNpmPlugin, addComposerPlugin } = require('@myparcel/semantic-release-config/src/plugins');

module.exports = {
  extends: '@myparcel/semantic-release-config',
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    [
      '@semantic-release/exec',
      {
        verifyReleaseCmd: `
          echo "lastVersion=\${lastRelease.version}" >> $GITHUB_OUTPUT
          echo "releaseType=\${nextRelease.type}" >> $GITHUB_OUTPUT
          echo "nextVersion=\${nextRelease.version}" >> $GITHUB_OUTPUT
          
          echo "nextRelease2=\${JSON.encode(nextRelease)}" >> $GITHUB_OUTPUT
          echo "lastRelease2=\${JSON.encode(lastRelease)}" >> $GITHUB_OUTPUT
          echo "nextRelease=\${nextRelease}" >> $GITHUB_OUTPUT
          echo "lastRelease=\${lastRelease}" >> $GITHUB_OUTPUT
        `,
      },
    ],
    addNpmPlugin(),
    addComposerPlugin(),
    addGitPlugin(),

    // ['@edielemoine/semantic-release-svn', { url: 'https://plugins.svn.wordpress.org/woocommerce-myparcel' }],

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
    //   '@saithodev/semantic-release-backmerge',
    //   {
    //     branches: ['develop'],
    //     clearWorkspace: true,
    //     // 'plugins': [
    //     //   [
    //     //     '@semantic-release/exec',
    //     //     {
    //     //       'successCmd': 'git fetch origin develop',
    //     //     },
    //     //   ],
    //     // ],
    //   },
    // ],
  ],
};
