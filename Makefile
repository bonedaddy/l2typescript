.PHONY: install
install:
	npm install -g typescript
	
.PHONY: build
build: compile run

compile:
	tsc main.ts
run:
	node main.js
