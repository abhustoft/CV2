build:
	cd client;rm -rf dist;mkdir dist
	cd client;jspm bundle-sfx app/main dist/app.js
	cd client;./node_modules/.bin/uglifyjs dist/app.js -o dist/app.min.js
	cd client;./node_modules/.bin/html-dist index.html --remove-all --minify --insert app.min.js -o dist/index.html

serve-dist:
	rm client
	ln -s client-src/dist client

serve-src:
	rm client
	ln -s client-src client
