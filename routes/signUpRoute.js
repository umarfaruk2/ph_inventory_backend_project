import express from 'express';
import { signUpController } from '../controllers/userController.js';
const signUpRoute = express.Router();

signUpRoute.post('/', signUpController);

export default signUpRoute;