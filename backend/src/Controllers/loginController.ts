import { Request, Response } from "express";

import { compare } from "bcrypt";
import { findUser } from "../helpers/userHelpers";

const loginController = async (req: Request, res: Response) => {
  try {
    const user = await findUser(req.body.email);
    if (!user) {
      return res.status(401).json({ message: "Login failed" });
    }
    compare(
      req.body.password + process.env.SECRET_PASSWORD,
      user.password,
      (err, result) => {
        if (err) {
          res.status(401).json({ err });
        }
        if (!result) {
          res.status(401).json({ message: "Wrong Password!" });
          return;
        } else {
          res.status(200).json({ message: "Suceess", user, result });
        }
      }
    );
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default loginController;
