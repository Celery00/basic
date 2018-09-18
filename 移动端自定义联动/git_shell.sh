#!/bin/bash

# Get current file path.
CMD_PATH=`dirname $0`
cd $CMD_PATH
echo "current finder: $PWD"

# Each finder files
for filen in `ls $PWD`
do
	if [ $filen != 'git_shell.sh' ]
	then
		git add $filen
		echo "git add $filen"
	fi
done

# commit and push to master
git commit -m "Add or update. -- git_shell.sh"
git pull
git push