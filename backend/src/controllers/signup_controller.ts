import { Request, Response } from "express"

import { genSalt, hash } from "bcrypt";
import { UserModel } from "../db/users";
import { findExistingUser } from "models/user";

 const signupController = async (req: Request, res: Response) => {
    const { email, password, username, role } = req.body;
    try {
      const userPresent = await UserModel.findOne({ email });
      if (userPresent) {
        res.status(409).send({ error: "User already exists" });
        return;
      }
      if (!userPresent) {
        genSalt(10)
          .then((salt) => hash(password + process.env.SECRET_PASSWORD, salt))
          .then((hashedPassword) => {
            const newUser = new UserModel({
              email,
              password: hashedPassword,
              username,
              role,
            });
            newUser
              .save()
              .then((data) => {
                res.status(201).json(data);
              })
              .catch((err) => {
                res.status(400).send({ err });
              });
          });
      }
    } catch (error) {
      res.status(400).send({ error });
    }
  }

  export default signupController