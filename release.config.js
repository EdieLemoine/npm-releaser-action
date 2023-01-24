const baseConfig = require('@myparcel/semantic-release-config');
const { addGitPlugin, addNpmPlugin, addComposerPlugin } = require('@myparcel/semantic-release-config/src/plugins');


const plainCommand = `echo "OUTPUTTING TO GITHUB_OUTPUT"
  echo "lastVersion=\${lastRelease.version}" >> $GITHUB_OUTPUT

  echo "releaseType=\${nextRelease.type}" >> $GITHUB_OUTPUT
  echo "nextVersion=\${nextRelease.version}" >> $GITHUB_OUTPUT

  echo "nextRelease=\${nextRelease}" >> $GITHUB_OUTPUT
  echo "lastRelease=\${lastRelease}" >> $GITHUB_OUTPUT

  echo "Wrote to GITHUB_OUTPUT"
  `;

module.exports = {
  extends: '@myparcel/semantic-release-config',
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    [
      '@semantic-release/exec',
      {
        verifyReleaseCmd: plainCommand
          // Filters leading and trailing whitespace.
          .trim()
          // Splits all lines into an array.
          .split('\n')
          // Removes empty lines.
          .filter(Boolean)
          // Trims whitespace off each line. Not necessary for the script to run, but makes the output look nicer.
          .map((line) => line.trim())
          // Joins all lines into a single command with && between each line.
          .join(' && '),
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
