import { MongoClient, type Db } from "mongodb";

const url = "mongodb://localhost:27017/";
const dbName = "library";

let db: Db;

export const connectToDb = async () => {
  const client = await MongoClient.connect(url);
  db = client.db(dbName);
  console.log("Connected to MongoDb");
};

export const getDB = () => {
  if (!db) {
    throw new Error("Database not connected. Please call connectToDB first.");
  }
  return db;
};
