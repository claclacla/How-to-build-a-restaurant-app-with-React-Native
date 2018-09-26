#!/bin/bash

echo "
Install npm packages for node app...
"

npm install --prefix /usr/src/app

npm install -g expo-cli

cd /usr/src/app && yarn start