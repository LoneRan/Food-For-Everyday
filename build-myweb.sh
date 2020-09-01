#!/bin/sh

sudo apt install npm
npm install -g create-react-app
create-react-app my-web

rm -r ./my-web/src
cp -R ./src ./myweb
cd myweb
