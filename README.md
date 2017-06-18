# CV - an app to test the following technologies:

## Set up
* sudo npm install gulp -g
* sudo npm install -g strongloop
* make serve-src (Or: make build; make serve-dist)
* npm install
* cd client-src
* npm install
* npm run dev
* cd ../server
* node server.js
* In the browser, load localhost:3000

## Current POC
* loopback
* React
* Redux
* Ecmascript 2015
* Babel transpiler
* css-grid
* react-jss
* Webpack
* Cucumber
* Service worker

## To do
* graphQL
* Greensock animation?

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


