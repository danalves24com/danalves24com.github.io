#!/bin/bash
upload() {
	git add .
	git commit -m "status $1"
	git push && git pull
	merge
}
merge() {
git checkout master
git merge dev
}
for (( c=1; c<=10; c++ ))
do
	echo "$c is the index rn" >> info.json
	sleep 1m
	upload $c
done
