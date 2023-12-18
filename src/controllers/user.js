import bcrypt from "bcryptjs";
import UserModel from "../models/User";
import jwt from "jsonwebtoken";

// ADD_USER
// LOGIN

const ADD_USER = async (req, res) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
  
      const user = new UserModel({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hash,
      });
  
      const response = await user.save();
  
      return res
        .status(201)
        .json({ message: "User was added", response: response });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Something happened" });
    }
  };