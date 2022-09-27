const core = require('@actions/core');
const github = require('@actions/github');
const standardVersion = require('standard-version');

async function run() {
  try {
    const dryRun = core.getInput('dry-run') || true;
    const output = standardVersion({ dryRun });

    console.log(output);
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

void run();
