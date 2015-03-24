# NodeJS webserver

Webserver example with NodeJS / Socket.io / Google Visualization API.

This is the front-end of the app. Checkout also the [PubSub] (https://github.com/pangio/nodejs-pubsub) back-end to taste the real-time with NodeJS & Socket.io

# Stack
*  Nodejs v0.12
*  Express v3.20
*  Socket.io
*  Google Visualization API
*  Twitter Bootstrap


# Prerequisites
*  Nodejs
* [PubSub] (https://github.com/pangio/nodejs-pubsub) server up & running
*  Redis instance on Cloud - required by the PubSub

# Setup

* clone the repo
```
https://github.com/pangio/nodejs-webserver.git
```
* Build
```
npm install
```
* Run
```
node app.js
```

# Browse

``` URL ``` [localhost:3000/](http://localhost:3000/)

browse to ```/pie``` and ```/column``` to see the Google Charts
