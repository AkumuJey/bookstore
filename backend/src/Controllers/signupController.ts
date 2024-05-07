import { Request, Response } from "express";
import { genSalt, hash } from "bcrypt";
import { findUser, registerUser } from "../helpers/userHelpers";

const signupController = async (req: Request, res: Response) => {
  const { email, password, username, role } = req.body;
  try {
    const userPresent = await findUser(email);
    if (userPresent) {
      res.status(409).send({ error: "User already exists" });
      return;
    }
    if (!userPresent) {
      genSalt(10)
        .then((salt) => hash(password + process.env.SECRET_PASSWORD, salt))
        .then((hashedPassword) => {
          registerUser({
            email: email,
            password: hashedPassword,
            role: role,
            username: username,
          })
            .then((doc) => {
              res.status(201).json({
                status: "success",
                data: { doc },
              });
            })
            .catch((err) => {
              res.status(400).send({ message: err.message });
            });
        });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

export default signupController;
