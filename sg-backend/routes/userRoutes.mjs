import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.mjs';

const userRoutes = (app) => {
    app.post('/register', registerUser);
    app.post('/login', loginUser);
};


export default userRoutes;

