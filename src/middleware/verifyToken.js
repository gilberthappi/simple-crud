/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';
// import { login } from '../controllers/authentication';

export const verifyToken = (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    const token = auth?.split(' ')[1];
    console.log(token, 'token');
    if (!token) {
      return res.status(403).send({
        message: 'No token provided',
      });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: 'Unauthorized',
        });
      }
      req.userId = decoded._id;
      next();
    });

    // console.log(decoded, "decoded once token is wrong");
    // if(!decoded) {
    //   return res.status(401).send({
    //     message: 'Unauthorized',
    //   });
    // }

    // req.userId = decoded._id;
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};