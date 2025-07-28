import express from "express"
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const authRoutes = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is undefined. Check .env and dotenv.config()");
  }

//Registering a user
authRoutes.post('/register', async (req,res) => {
    const {email, password} = req.body;
    try {
        const existing = await User.findOne({email});
        if(existing){
            return res.status(400).json({message: 'Email already in use!'})
        }
        console.log("JWT_SECRET:", JWT_SECRET);
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({email, hashedPassword});

        const token = jwt.sign({id: user._id, email: user.email}, JWT_SECRET, {expiresIn: '2d'})

        res.status(201).json({message: 'User Registered!', accessToken: token, user: {_id: user._id, email: user.email}})

    }catch(err){    
        res.status(500).json({message: 'Registration failed!', error: err.message})
    }
})

//Login
authRoutes.post('/login', async (req,res) => {
    const {email, password} = req.body;

    try {
        const user =  await User.findOne({ email });
        if(!user) {
            return res.status(400).json({message: 'Invalid credentials!'})
        }

        const match = await bcrypt.compare(password, user.hashedPassword);
        if(!match) {
            return res.status(400).json({message: 'Invalid credentials!'})
        }

        const token = jwt.sign({id: user._id, email: user.email}, JWT_SECRET, {expiresIn: '2d'})
        res.status(200).json({message: 'Login successful!', accessToken: token, user: {_id: user._id, email: user.email}})
    } catch(err){
    console.log(err);}
})

export default authRoutes;