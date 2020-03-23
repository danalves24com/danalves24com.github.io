#!/bin/bash
upload() {
	git add .
	git commit -m "status"
	git push && git pull
}
merge() {
git checkout master
git merge dev
}
git checkout dev
echo "2 is the index rn" >> info.json
upload
merge
