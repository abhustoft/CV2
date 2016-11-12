# CV - an app to test the following technologies:

## Set up
* otto dev ('otto dev address' to get VM's IP address)
* otto dev ssh
* sudo npm install gulp -g
* sudo npm install jspm -g
* sudo npm install -g strongloop
* make serve-src (Or: make build; make serve-dist)
* npm install
* cd client-src
* npm install
* gulp styl (or gulp watch)
* cd ../server
* node server.js
* In the browser, load `otto dev address`:3000

## Current POC
* loopback
* React
* Redux
* Ecmascript 2015
* Babel transpiler
* jspm module loader
* Otto VM
* CSS Stylus
* CSS Flexbox
* BEM
* Rx.js
* Webpack
* Docker

## To do
* Test: http://facebook.github.io/react/docs/test-utils.html#shallow-rendering, https://github.com/airbnb/enzyme, Karma/Mocha, Chai, Sinon
* CSS helpers: Gridly? Milligram? Material Design Lite?
* CSS http://philipwalton.com/articles/css-architecture/#organize-your-css-into-a-logical-structure
* Otto or Strongloop deploy
* Greensock animation?
* Offline? Upup (service workers)? PouchDB?docker run --name CVv2 -d -p 8080:3000 -i -t abhustoft/cv

## Run in Docker container
* docker build -t abhustoft/cv .           // Build image from Dockerfile
* docker images                            // List images
* docker run -p 3003:3000 -d abhustoft/cv  // Run image - Development machine
* docker run --name CVv2 -d -p 8080:3000 -i -t abhustoft/cv // Run on cloud
* docker ps                                // List running images
* docker logs 956c2a63d891                 // Output from image
* curl -i localhost:3003                   // Load from image

* docker login                             // Log in to dockerhub
* docker push abhustoft/cv:<ver>           // Push image to dockerhub


