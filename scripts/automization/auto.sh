#!/bin/bash
echo "2 is the index rn" >> info.json
git add .
git commit -m "upload"
git push && git pull
git checkout master
git merge dev
