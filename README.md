# Blocks

Blocks is a version of Tetris built in Typescript. The frontend was bootstrapped with Vite and styled using Tailwind. The backend was built using NestJS and utilises a MongoDB database.

# Tech Stack

- Vite
- Typescript
- Tailwind
- NestJS
- MongoDB

# Getting Started

If you'd like to run this application locally then follow these steps:

* Clone the repository to your computer.
* Install npm packages with `npm install`. 
* This project requires .env files in both the client and server directories. 
* For the client .env file, populate it with the following variables:
```
VITE_GET_SCORES_URL
VITE_POST_SCORE_URL
```
* These variables should contain the url of the related API, which locally would run on http://localhost:3000/scores
* The server .env file should be populated with the following variables:
```
MONGO_URI
```
* This variable represents a mongodb URI.
* Once the above conditions have been met, you can run `npm run start` in the client directory to run the client application on http://localhost:5173/
* You can run the same command in the server directory to start the server on http://localhost:3000/

# Tetris Logic

I made extensive use of the Tetris wiki to determine score values, fall speeds and proper terminology. 

I modelled the values on the NES version of the game while the UI was partially inspired by Tetris N-Blox. Sensible adjustments have been made as I found appropriate. 

This project was made just for fun and I don't claim ownership over any of the concepts.