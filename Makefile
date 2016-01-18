build:
	cd client;rm -rf dist;mkdir dist
	# JS
	cd client;gulp bundle
	cd client;cp jspm_packages/npm/marked@0.3.5/lib/marked.js dist
	#HTML
	cd client;./node_modules/.bin/html-dist index.html --remove-all --minify --insert marked.js --insert app.min.js  -o dist/index.html
	# CSS
	cd client;mkdir -p dist/app/styles
	cd client;cp app/styles/screen.css dist/app/styles
	cd client;cp app/styles/screen.css.map dist/app/styles

serve-dist:
	rm client
	ln -s client-src/dist client

serve-src:
	rm client
	ln -s client-src client
