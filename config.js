// const dotenv = require("dotenv")
// dotenv.config()
module.exports = { 
  db: `mongodb+srv://swistek_92:${process.env.mongo}@cluster0.13vko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  keySession: ["KEYKEYKEY"],
  maxAgeSession: 24 * 60 *60 *1000
}