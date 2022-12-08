import express from 'express';
import { loginController } from '../controllers/userController.js';
const loginRoute = express.Router();

loginRoute.post('/', loginController);

export default loginRoute;
