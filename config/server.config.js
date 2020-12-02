/* eslint-disable no-undef */
module.exports = {
  development: {
    //port definition
    port: 4000,
    //saltrounding for hashing the password
    saltRounding: process.env.SALT_ROUNDING
  },
  production: {
    //port definition
    port: process.env.PORT,
    //saltrounding for hashing the password
    saltRounding: process.env.SALT_ROUNDING
  }
}