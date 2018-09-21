#!/bin/bash

echo "
Install npm packages for node app...
"

npm install --prefix /usr/src/app

npm install -g react-native-scripts

cd /usr/src/app && yarn start