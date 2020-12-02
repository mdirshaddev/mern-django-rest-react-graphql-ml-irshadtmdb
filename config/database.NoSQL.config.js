// mongoose orm model for mongodb
const mongoose = require('mongoose');

//db config
const DB_CONFIG = require('./database.config');


//db config for nosql
const NoSQL_CONFIG = DB_CONFIG['DATABASE']['NOSQL'];

//mongodb connection with it's validation
mongoose.connect(NoSQL_CONFIG['DB_URL'], {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

module.exports = mongoose.connection;