#!/usr/bin/env bash

git add -A

CHANGES=$(git status --porcelain)

if [ "$CHANGES" ]; then
  git stash
fi

git fetch
git rebase

if [ "$CHANGES" ]; then
  git stash pop
  git add -A
fi

git commit -m "fix: update $(date +"%Y-%m-%d %T")"

git tag --delete v1 --quiet || continue
git push origin --delete v1 --quiet || continue
git tag v1

git push --all
