require("dotenv").config()
const {MongoClient} = require("mongodb")

const client = new MongoClient(process.env.MONGO_URI)

async function conectMongo2() {
  try {
    await client.connect()
  console.log("Connect to DB: ",process.env.DB_NAME2)
   console.log("✅ Using DB:", process.env.DB_NAME2)
  const db = client.db(process.env.DB_NAME2)
  return db
  } catch (error) {
    console.log("Error: ",error)
  }
}
module.exports = conectMongo2