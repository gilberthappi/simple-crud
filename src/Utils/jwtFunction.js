/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import jwt from 'jsonwebtoken';

export const generateToken = (data) => {
  const token = jwt.sign(data, process.env.JW_SECRET, {
    expiresIn: process.env.JWT_EXP,
  });
  return token;
};