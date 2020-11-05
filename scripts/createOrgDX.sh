#!/bin/sh

clear

ORG_NAME=Test-Scratch-Org

rm -rfv force-app/main/default/*

sfdx force:mdapi:convert -r src

sfdx force:org:create -f config/project-scratch-def.json -d 1 orgName=${ORG_NAME} -a ${ORG_NAME} --json

sfdx force:source:push -f -u ${ORG_NAME}

if [ "$?" = "1" ]
then 
	echo -e "Can't deploy your source code.\n"
	exit 
fi

echo -e "Your environment is ready now!!!\n\n"
sfdx force:org:open -u ${ORG_NAME} -p lightning/page/home