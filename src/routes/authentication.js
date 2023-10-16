/* eslint-disable import/named */
import express from 'express';
import { login, signUp, changePassword } from '../controllers/authentication';
import { myLogger, verifyToken } from '../middleware';

const authRouter = express.Router();

authRouter.post('/login', login);
authRouter.post('/signup', myLogger, signUp);

authRouter.post('/changePassword', verifyToken, changePassword);

export default authRouter;