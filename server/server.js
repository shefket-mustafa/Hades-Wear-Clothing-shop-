import './config';
import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from './routes/authRoutes';


const app = express();
const port = process.env.PORT || 3030;
    console.log(process.env);

    

    app.use(cors());
    app.use(express.json());

    app.use('/users', authRoutes)


    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        
        app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
        })
    })
    .catch(err => {

        console.error("❌ MongoDB connection error:", err.message);
    })
    


