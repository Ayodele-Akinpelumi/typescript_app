import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import Route from "./Route/UserRoute.js";

dotenv.config();

const app = express();


app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGODBURL = process.env.MONGODB_URL; 

// Add debug logging
console.log('MongoDB URL:', MONGODBURL);

// Database connection
const connectDB = async () => {
    try {
        if (!MONGODBURL) {
            throw new Error('MongoDB URL is not defined in environment variables');
        }
        await mongoose.connect(MONGODBURL);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};


app.use("/api/user", Route);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message:'Something broke!'});    

});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found!' });
});
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server startup error:', error);
        process.exit(1);
    }



};
startServer();

