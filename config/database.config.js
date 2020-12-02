/* eslint-disable no-undef */
module.exports = {
  DATABASE: {
    SQL: {
      //database name
      DB_NAME: process.env.DB_NAME,
      //database user name
      DB_USERNAME: process.env.DB_USERNAME,
      //database password
      DB_PASSWORD: process.env.DB_PASSWORD,
      //localhost
      HOST: process.env.HOST,
      //dialect
      dialect: 'postgres',
      //pool config's
      pool: {
        //maximum no of connection
        max: 5,
        //minimum no of connection
        min: 0,
        //acquire
        acquire: 3000,
        //timed out setup
        idle: 10000
      }
    },
    NOSQL: {
      DB_URL: process.env.DB_URI
    }
  }
}