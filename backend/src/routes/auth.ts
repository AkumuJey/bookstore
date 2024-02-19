
import express from "express";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { UserModel } from "../db/users.js";


const signupRoute = express.Router();
const loginRoute = express.Router();

signupRoute.post("/", async (req, res) => {
  const { email, password, username, role } = req.body;
  try {
    const userPresent = await UserModel.findOne({ email });
    console.log(userPresent);

    if (userPresent) {
      res.status(409).send({ error: "User already exists" });
      return;
    }
    if(!userPresent) {
        const saltedPassword = genSaltSync(10)
        const hashedPassword = hashSync("A04561", saltedPassword)
        const newUser = UserModel.create({ email, hashedPassword, username, role });
        res.json({ message: "Signing up user...", email, hashedPassword, newUser });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
});
loginRoute.post("/", async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
});

export { loginRoute, signupRoute };
//export
