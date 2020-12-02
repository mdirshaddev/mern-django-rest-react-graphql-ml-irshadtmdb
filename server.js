// express server
const express = require('express');

// body-parser to parse out incoming request
const bodyParser = require('body-parser'); 

// initializing express server
const app = express();

// routes for handling express routes
// const router = require('express').Router();

// to handle environement variable
const dotenv = require('dotenv');
dotenv.config();

// cross origin resource sharing
const cors = require('cors');

// morgan an HTTP request logger middleware
const logger = require('morgan');


// config to check it's development or production
// eslint-disable-next-line no-undef
const environment = process.env.NODE_ENV || "production";
const stage = require('./config/server.config')[environment];

// Relational database SQL (PostgresSQL)
// const SequelizeDB = require('./config/database.SQL.config');

// Non relational databse NoSQL (MongoDB)
// const NoSQL_DB = require('./config/database.NoSQL.config');

// Environment identification
if (environment !== 'production') {
  app.use(logger('dev'));
}

// middleware for express
app.use(express.json());

//middleware body-parser
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.urlencoded({ urlencoded: true }))

// middleware for CORS work
app.use(cors());

// // to validate SQL (postgresSQL) connection
// SequelizeDB.sequelize.sync({force: true})
//   .then(()=>console.log('Drop and re-sync database'))
//   .catch(err=>console.log(err));

// // to validate NoSQL (MongoDB) connection
// NoSQL_DB.on('error', console.error.bind(console, 'connection error:'));
// NoSQL_DB.once('open', function() {
//   console.log('MongoDB is connected.');
// });


// for purpose of building in production
if(process.env.NODE_ENV==='production'){
  // eslint-disable-next-line no-undef
  const BuildPath = 'frontend/build';
  app.use(express.static(BuildPath)) // this will link all the assets of static folder
  // serving the webpack react build with pwa capabilities
  app.get('*', (req,res)=>{
    res.sendFile(
      BuildPath + 'index.html' // serving index.html from webpack react build
    )
  })
}

// initialising the express server
app.listen(`${stage.port || 4000}`, () => {
  console.log(`Server is running at ${stage.port || 4000}`);
})