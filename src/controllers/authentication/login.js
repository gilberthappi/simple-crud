/* eslint-disable no-underscore-dangle */
/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import { user } from '../../models';
import { comparePassword, generateToken } from '../../Utils';

export const login = async (req, res) => {
  try {
    const User = await user.findOne({ email: req.body.email });

    if (!User) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const isPasswordCorrect = await comparePassword(
      req.body.password,
      User.password,
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: 'Wrong password',
      });
    }

    const token = generateToken({
      _id: User._id,
      // email: User.email,
    });

    res.status(200).json({
      message: 'User logged in successfully',
      access_token: token,
      user: {
        email: User.email,
        location: User.location,
        fullNames: User.fullNames,
        phoneNumber: User.phoneNumber,
        role: User.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};