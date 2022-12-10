import express from 'express';
import { getMyInfo, loginController, signUpController } from '../controllers/userController.js';
import { verifyToken } from '../middleware/verifyToken.js';
const userRoute = express.Router();

userRoute.post('/sign-up', signUpController);
userRoute.post('/login', loginController);
userRoute.get('/me', verifyToken, getMyInfo);

export default userRoute;