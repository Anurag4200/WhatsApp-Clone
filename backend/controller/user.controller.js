import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (password != confirmPassword) {
      return res.status(400).json({ message: "passwords do not match" });
    }
    const userExist = await userModel.findOne({ email });
    if (userExist)
      return res.status(400).json({ message: "User already exists" });
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const user = await new userModel({
          name,
          email,
          password: hash,
          confirmPassword,
        });
        var token = jwt.sign({ email: email, userId: user._id }, "shhhhh");
        res.cookie("token", token);
        await user.save();
        res.send(user);
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await userModel.findOne({ email });
    if (!userExist) return res.status(404).send("Invalid User Credintial");
    bcrypt.compare(password, userExist.password, function (err, result) {
      if (!result) return res.send("something went wrong");
      var token = jwt.sign({ email: email, userId: userExist._id }, "shhhhh");
      res.cookie("token", token);
      res.send(userExist);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "");
    res.status(200).send("logged out successfully");
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const allUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredusers = await userModel
      .find({ _id: { $ne: loggedInUser } })
      .select("-password");
    res.send(filteredusers);
  } catch (err) {
    console.log(err);
  }
};

