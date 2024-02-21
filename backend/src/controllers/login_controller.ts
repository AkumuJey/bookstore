
import { Request, Response } from "express"
import {UserModel} from "../db/users"
import { compare } from "bcrypt";

const loginController = async (req: Request, res: Response) => {

    try {
      await UserModel.findOne({email: req.body.email}).then(async  (user)=> {
        if (!user) {
          res.status(401).json({message: "Login failed"})
          return
        }
        compare(req.body.password +  process.env.SECRET_PASSWORD, user.password, (err, result) =>{
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
  }

  export default loginController