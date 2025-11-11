require("dotenv").config()
const {MongoClient} = require("mongodb")

const client = new MongoClient(process.env.MONGO_URI)

async function conectMongo() {
  try {
    await client.connect()
    console.log("Connected to DB: ",process.env.DB_NAME)
    const db = client.db(process.env.DB_NAME)
    return db
  } catch (error) {
    console.log("Error: ",error)
  }
}
module.exports = conectMongo