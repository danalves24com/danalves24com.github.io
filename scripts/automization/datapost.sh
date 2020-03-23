#!/bin/bash
clear
read body 
echo "Article = { 'body': '$body' }" >> intel.json
	#upload 
    git add .
	git commit -m $RANDOM
	git push && git pull
	git checkout master
	git merge dev

