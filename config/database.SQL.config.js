//sequelize orm initialising
const { Sequelize } = require('sequelize');

//db config
const DB_CONFIG = require('./database.config');

//db config for sql
const SQL_CONFIG = DB_CONFIG['DATABASE']['SQL'];

//establishing connection
const sequelize = new Sequelize(
  SQL_CONFIG['DB_NAME'],
  SQL_CONFIG['DB_USERNAME'],
  SQL_CONFIG['DB_PASSWORD'], 
  {
    host: SQL_CONFIG['HOST'],
    dialect: SQL_CONFIG['dialect'],
    pool: {
      max: SQL_CONFIG['pool']['max'],
      min: SQL_CONFIG['pool']['min'],
      acquire: SQL_CONFIG['pool']['acquire'],
      idle: SQL_CONFIG['pool']['idle']
    }
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;