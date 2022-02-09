const randomWords = require('random-words');
const child_process = require('child_process');
const path = require('path');
const fs = require('fs');

const types = ['feat', 'fix', 'refactor', 'style', 'build', 'perf'];
const scopes = ['order', 'shipment', 'return', 'collect'];

const commits = [];

const [, , amount, branch] = process.argv;

for (let i = 0; i < Number(amount || 1); i++) {
  const type = types[types.length * Math.random() | 0];
  let scopeString = '';
  let scope = null;

  if (Math.random() > 0.5) {
    scope = scopes[scopes.length * Math.random() | 0];
    scopeString = `(${scope})`;
  }

  commits.push({
    type,
    scope,
    message:
      `${type}${scopeString}: ${randomWords({ min: 4, max: 8, maxLength: 8, join: ' ' })}`,
  });
}

child_process.spawnSync('git', ['checkout', '-b', branch || 'develop'], { stdio: 'inherit' });
commits.forEach((commit) => {
  const basePath = path.resolve(__dirname, '..', 'src');

  let dir = path.resolve(basePath, 'commits', commit.type);
  let file = path.resolve(dir, `${commit.scope ?? 'none'}.txt`);
  child_process.spawnSync('mkdir', ['-p', dir], { stdio: 'inherit' });
  child_process.spawnSync('touch', [file], { stdio: 'inherit' });

  fs.appendFileSync(file, commit.message + '\n');

  child_process.spawnSync('git', ['add', file], { stdio: 'inherit' });
  child_process.spawnSync('git', ['commit', '-m', commit.message], { stdio: 'inherit' });
});
child_process.spawnSync('git', ['push', '--set-upstream', 'origin', branch], { stdio: 'inherit' });
child_process.spawnSync('git', ['checkout', '-'], { stdio: 'inherit' });

// console.log(commits);
