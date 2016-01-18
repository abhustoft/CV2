build:
	cd client-src;rm -rf dist;mkdir -p dist/app/styles
	# JS
	cd client-src;gulp --dist
	#HTML
	cd client-src;./node_modules/.bin/html-dist index.html --remove-all --minify --insert app.min.js  -o dist/index.html
	# CSS
	#cd client;cp app/styles/screen.css.map dist/app/styles

serve-dist:
	rm client
	ln -s client-src/dist client

serve-src:
	rm client
	ln -s client-src client
