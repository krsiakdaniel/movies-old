default:
	cat Makefile

clear:
	rm -rf ./node_modules

# --- React app
start:
	yarn start

build:
	yarn build

# --- Testing
# Cypress (E2E tests)
cy-open:
	yarn cypress:open

cy-run:
	yarn cypress:run

cy-record:
	yarn cypress:record

# Jest (unit tests)
test:
	yarn test

# --- Code formatting
prettier:
	yarn prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"
