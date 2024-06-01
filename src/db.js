import { MongoClient } from 'mongodb';

let db;

async function connectToBy(cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@react-blog.h3kbd.mongodb.net/?retryWrites=true&w=majority&appName=react-blog`);
    await client.connect();
    db = client.db('react-blog-db');
    cb();
}

export {
    db,
    connectToBy
}