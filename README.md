## What is it

Simple chat app.

## How does it work

Uses React and connects via websockets to a simple socket.io server.

## How could we setup

### Requirements:

- `node` v10.16 (or latest LTS)
- `yarn` v1.17 (or latest Stable)
- Run `yarn` to download all the dependencies.

### How to run this project

You will need two Terminal tabs to run this :

- On the first one, run the server: `yarn socketio`
- On the second tab, run the front-end in development mode: `yarn start`

optimal builds for the front-end can be done using `yarn build` - the optimized build files will be located on the `/build` folder and ready to deploy in a real webserver or hosting service like netlify.
