/* eslint-disable quotes */
/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import { generateToken, hashPassword } from "../../Utils";
import { user } from "../../models";

export const signUp = async (req, res) => {
  try {
    const User = await user.findOne({ email: req.body.email });

    if (User) {
      return res.status(409).json({
        message: "User with this email already exists",
      });
    }

    const hashedPassword = await hashPassword(req.body.password);

    req.body.password = hashedPassword;
    console.log(req.body);
    const newUser = await user.create(req.body);
    if (!newUser) {
      res.status(404).json({ message: "failed to register" });
    }
    const token = generateToken({
      _id: newUser._id,
      // email: newUser.email,
    });

    res.status(201).json({
      message: 'User registered successfully',
      access_token: token,
      user: {
        email: newUser.email,
        location: newUser.location,
        fullNames: newUser.fullNames,
        phoneNumber: newUser.phoneNumber,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
