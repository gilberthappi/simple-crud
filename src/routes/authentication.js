/* eslint-disable import/extensions */
import express from 'express';
import { getAuth } from '../controllers/authentication';

const authRouter = express.Router();

authRouter.get('/', getAuth);

export default authRouter;