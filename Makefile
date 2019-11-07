.PHONY: install
install:
	npm install -g typescript
	
.PHONY: build
build: compile run

compile:
	tsc main.ts
	tsc ipfs.ts

run:
	@echo "running main.js"
	node main.js
	@echo "running ipfs.js"
	node ipfs.js
