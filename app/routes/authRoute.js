import express from "express";
import bcrypt from "bcrypt";
import config from "../config";
import { User } from "../../connect";
const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
  } catch (error) {
    throw new Error(error);
  }
});
authRouter.post("/register", async (req, res) => {
  try {
    const { email, name, avatar, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(422).send("รหัสผ่านไม่ตรงกัน");
    }
    const user = new User();
    user.email = email;
    user.name = name;
    user.avatar = avatar;
    user.password = bcrypt.hashSync(password, config.bcrypt.round);
    await user.save();
    return res.json(user);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});
authRouter.post("/forgotPassword", async (req, res) => {
  try {
    const { email } = req.body;
  } catch (error) {
    return res.send(error);
  }
});
export default authRouter;
