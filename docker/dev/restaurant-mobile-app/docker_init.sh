#!/bin/bash

echo "
Install npm packages for node app...
"

npm install --prefix /usr/src/app

cd /usr/src/app && yarn start