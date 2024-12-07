// SERVER FILE 

import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import 

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;


// MIDDLEWARE-----------------------------------
app.use(express.json());


// ROUTES HANDLING ----------------------------
