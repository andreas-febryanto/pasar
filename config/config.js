const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://admin-andreas:masukaja@mflix.y478p.mongodb.net/test?retryWrites=true&w=majority";
const dbName = "sample_mflix";

const client = new MongoClient(uri);
let db;

async function connect() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    db = client.db(dbName);
  } catch (err) {
    console.log(err);
  }
}

function getDatabase() {
  return db;
}

module.exports = {
  connect,
  getDatabase,
};
