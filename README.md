# MERN, Django, REST, GraphQL, Machine learning, IrshadTMDb

**Movie Database Hosted on Heroku and Data managed by AWS.**

## Microservices 1

**MERN Stack Webapp with postgresql and mongodb as the database. To store and retrieve data.**

## Microservices 2

**Django Machine learing model with it's api and SQLite3 as a development database for hassle free database modeling of Machine learning prediction.**

Stage 1: Defining the use of this Webapp.

Stage 2: Designing frontend and its Backend Architecture Database Schema in both One Tier and Two tier using some presentation software.

Stage 3: Working on Code Solution.

Stage 4: Deployment of Project.

Django Template is ready with it's REST API file setup.

React App template is also ready.

Backend will be powered by Express for react.

Django will be used to deploy the Machine learning model and it's REST API for data prediction and the predicted data will be store in SQLite and Postgresql database of Microservices 1.

Basically i have a plan to keep a copy of data stored in SQLite from postgresql. So that i can use it in development later on.


# Backend

**This is Backend for IrshadTMDB**

**This project is based on the GraphQL and REST API**

* We have an API for User authentication and the authorization will be a jsonwebtoken based.
* Movie related data will be stored in PostgresSQL.
* User Behaviour like there data about what theme, email, username they have opt for in user settings page.
* Expose API for development purpose.

# List of libraries

* **bcryptjs**: used to hash passwords before we store them in our database

* **body-parser**: used to parse incoming request bodies in a middleware

* **concurrently**: allows us to run our backend and frontend concurrently and on different ports

* **express**: sits on top of Node to make the routing, request handling, and responding easier to write

* **jsonwebtoken**: used for authorization

* **mongoose**: used to interact with MongoDB

* **passport**: used to authenticate requests, which it does through an extensible set of plugins known as strategies

* **passport-jwt**: passport strategy for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT

* **@hapi/joi**: used to validate inputs (e.g. check for valid email format, confirming passwords match)

* **crypto**: used to generate text for JWT token signature

# Frontend

# Library and Plugins Details

# Webpack + SCSS + React + Media Configuration

* **react** the react library

* **react-dom** this library helps us to use react in the browser

* **@babel/core** it is used to transpile the jsx to js

* **@babel/preset-env** it used to configure the transpiler for old browser

* **@babel/preset-react** it is used to configure the transpiler for react.

* **babel-loader** it is used to configure the webpack for using babel

* **css-loader** it is used to configure the webpack for compiling the css

* **webpack** it is used to bundle all the modules

* **webpack-cli** it is used to run webpack from cli

* **style-loader** it loads all the css in the head of HTML

* **webpack-dev-server** it used to serve the compiled file

* **node-sass** it is used to compile the sass/scss code to css file

* **sass-loader** it is used to configure the webpack for compiling the sass/scss