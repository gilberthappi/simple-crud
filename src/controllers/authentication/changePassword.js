/* eslint-disable no-unused-vars */
import { compare } from 'bcrypt';
import { user } from '../../models';
import { comparePassword, hashPassword } from '../../Utils';

export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const { userId } = req;
    const User = await user.findById(userId);
    const isPasswordCorrect = comparePassword(currentPassword, User.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: 'current password is wrong',
      });
    }

    const hashedPassword = await hashPassword(newPassword);
    User.password = hashedPassword;
    User.save();
    res.status(200).json({
      message: 'password changed successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};