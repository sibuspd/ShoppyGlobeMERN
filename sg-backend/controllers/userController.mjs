// LOGIC FOR REGISTRATION AND LOGIN

import userModel from "../models/User.mjs";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const registerUser = async (req, res) => { // User Registration
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // 
    const user = new User({ username, password: hashedPassword });

    try{
        await user.save();
        const token = jwt.sign( {id: user._id}, process.env.SECRET_KEY, {expiresIn: '1h'} );
        res.status(201).json( { token });
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
}

export const loginUser = async (req, res) => { // Logic for verifying Login information
    const { username, password } = req.body;
    try{
        const user = await userModel.findOne( {username} ); 
        if(!user || !(await bcrypt.compare(password, user.password)))
            return res.status(401).json( {message: "Invalid Credentials"} );
        const token = jwt.sign( {id: user._id}, process.env.SECRET_KEY, {expiresIn: "1h"} );
        res.json( {token} );        
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
};

