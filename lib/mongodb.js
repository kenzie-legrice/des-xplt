import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

//check the MongoDb URI

if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI enviromental variable');
}

//check mongodb DB

if (!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB enviromental variable')
}

let cachedClient = null;
let cahcedDb = null;

export async function connectToDatabase() {
    //check the cahced

    if(cachedClient && cahcedDb) {
        //load from cache
        return {
            client: cachedClient,
            db: cahcedDb,
        }
    }

    //set the connection options

    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    //connect to cluster

    let client = new MongoClient(MONGODB_URI, opts);

    await client.connect();

    let db = client.db(MONGODB_DB);


    //set cache
    cachedClient = client;
    cahcedDb = db;
    return {
        client: cachedClient,
        db: cahcedDb,
    };

    Console.log("connected to db");
    
}