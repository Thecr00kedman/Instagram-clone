import Joi from "joi";
import User from "../models/userSchema.js";
import { SECRET_KEY, comparePass, hashPass } from "../utils/utils.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const signupUser = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;
    const schema = Joi.object({
      fullName: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().min(5).required(),
      email: Joi.string().email().required(),
    });
    const { error } = schema.validate(req.body);

    const user = await User.findOne({ email });

    if (error) {
      return res.json({ error: error.details[0].message });
    } else if (user) {
      return res.json({ error: "User already exist" });
    } else {
      const hashedPassword = await hashPass(password);
      const newUser = new User({
        email,
        username,
        password: hashedPassword,
        fullName,
      });
      await newUser.save();
      return res.json({ success: "User registered successfully" });
    }
  } catch (error) {
    res.status(500).json(error, "error while signing up the user");
  }
};

export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const schema = Joi.object({
      password: Joi.string().min(5).required(),
      email: Joi.string().email().required(),
    });
    const { error } = schema.validate(req.body);

    if (error) {
      return res.json({ error: error.details[0].message });
    } else {
      const user = await User.findOne({ email });
      if (user) {
        const isValid = await comparePass(password, user.password);
        if (isValid) {
          const token = jwt.sign(
            { id: user._id, email: user.email },
            SECRET_KEY,
            { expiresIn: "5d" }
          );
          return res.json({
            success: "Logged in successfully",
            token,
            userID: user._id,
            name: user.username,
          });
        } else {
          return res.json({ error: "Password incorrect" });
        }
      } else {
        return res.json({ error: "User not found" });
      }
    }
  } catch (error) {
    res.status(500).json(error, "error while logging in the user");
  }
};
