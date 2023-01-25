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
        verifyReleaseCmd: `sh -c '
          if [ -n "$GITHUB_OUTPUT" ]; then
            echo "last-version=\${lastRelease.version}" >> $GITHUB_OUTPUT
            echo "next-version=\${nextRelease.version}" >> $GITHUB_OUTPUT
            echo "release-type=\${nextRelease.type}" >> $GITHUB_OUTPUT
          else
            echo "GITHUB_OUTPUT does not exist"
          fi
        '`
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
