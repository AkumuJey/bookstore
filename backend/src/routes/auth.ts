import express from "express";

import { compare, genSalt, hash } from "bcrypt";
import { UserModel } from "../db/users";

const signupRoute = express.Router();
const loginRoute = express.Router();

signupRoute.post("/", async (req, res) => {
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
});
loginRoute.post("/", async (req, res) => {

  try {
    await UserModel.findOne({email: req.body.email}).then(async  (user)=> {
      if (!user) {
        res.status(401).json({message: "Login failed"})
        return
      }
      await compare(req.body.password +  process.env.SECRET_PASSWORD, user.password, (err, result) =>{
        if (err) {
          res.status(401).json({ err})
        }
        if(!result){
          res.status(401).json({ message:"Wrong Password!"})
          return
        }else{
          res.status(200).json({message: "Suceess", user, result});
        }
      });
      
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({ error });
  }
});

export { loginRoute, signupRoute };
//export
