
import express from "express";

import { compare } from "bcrypt";
import { UserModel } from "../db/users";

const loginRoute = express.Router();
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

  export default loginRoute