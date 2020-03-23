#!/bin/bash
git checkout dev
for (( c=1; c<=10; c++ ))
do
	echo "$c is the index rn" >> info.json
	echo "2 is the index rn" >> info.json
	git add .
	git commit -m $RANDOM
	git push && git pull
	git checkout master
	git merge dev
done
