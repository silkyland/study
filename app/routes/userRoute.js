import express from "express";
import { User } from "../../connect";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return new Error(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    return res.json(user);
  } catch (error) {
    return new Error(error);
  }
});
router.post("/create", async (req, res) => {
  try {
    const { name, age, avatar } = req.body;
    const user = await User.create({ name: name, age: age, avatar: avatar });
    return res.json(user);
  } catch (error) {
    return new Error(error);
  }
});
router.patch("/update", async (req, res) => {
  try {
    const { id, name, age, avatar } = req.body;
    const user = await User.findById(id);
    user.name = name;
    user.age = age;
    user.avatar = avatar ? avatar : user.avatar;
    await user.save();

    return res.json(user);
  } catch (error) {
    return new Error(error);
  }
});

const userRoute = router;
export default userRoute;
