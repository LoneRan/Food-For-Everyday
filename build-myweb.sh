#!/bin/sh

sudo apt install npm
npm install -g create-react-app
create-react-app my-web

rm -r ./my-web/src
cp -R ./src ./my-web
cd myweb
npm install --save react-router-dom
npm install axios
