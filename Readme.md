# NestJS + React Application

## Backend
The backend code is under `be/` folder and is built using NestJS (Typescript) + MongoDB (Node v14.18)

### How to run
First you need to create a `.env` file and set the following vars:

	MONGO_URL=mongo:/....
	TOKEN_KEY=#4314...
	PORT=3001

To install and run the application you must use the commands:

	npm install
	npm run start

It will be running in the same port you configured in you `.env` file

## Frontend
The frontend is built using React (Node v14.18).

### How to run
You will also need to create a `.env` file and set the following vars:

	REACT_APP_API_URL=http://localhost:3001 #Your backend
To install and run:

	npm install
	npm run start

