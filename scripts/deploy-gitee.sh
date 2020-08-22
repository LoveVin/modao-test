#!/usr/bin/env bash

yarn build &&

cd build &&

git init &&

git add . &&

git commit -m 'deploy-gitee' &&

git remote add origin git@gitee.com:lovevin/modao-test.git &&

git push -u origin master -f

cd -