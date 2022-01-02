const dotenv = require("dotenv")
dotenv.config()
module.exports = { 
  db: process.env.mongo,
  keySession: ["KEYKEYKEY"],
  maxAgeSession: 24 * 60 *60 *1000
}