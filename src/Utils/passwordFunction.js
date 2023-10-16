/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
  const saltRounds = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return hashedPassword;
};

export const comparePassword = async (password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword);
  return result;
};