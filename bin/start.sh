#!/bin/sh

if [ "$NODE_ENV" == "production" ]; then
  node index.js
else
  nodemon -e js,hbs,md,json
fi
