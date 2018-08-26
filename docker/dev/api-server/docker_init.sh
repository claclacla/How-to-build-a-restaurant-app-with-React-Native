#!/bin/bash

echo "
Install npm packages for node app...
"

npm i --prefix /usr/src/app/docker/dev/api-server/src

echo "
Start app...
"

pm2-docker start /usr/src/app/docker/dev/api-server/src/app.js