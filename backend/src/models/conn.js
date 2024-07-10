const { MongoClient } = require("mongodb");

const conn_str = process.env.DB_URI
const db_name = process.env.DB_NAME || "sample"
console.log(conn_str)
const client = new MongoClient(conn_str)
let conn;

try{
    conn = await client.connect();
} catch(e){
    console.error(e)
}

let db = conn.db(db_name)

module.exports = db

