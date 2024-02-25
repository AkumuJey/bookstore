import { UserModel } from "../Models/userModel";
import { Request, Response } from "express";
const sellers_controller = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find({}, { password: 0 });
    console.log(users);
    res.json({
      status: "success",
      data: users,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
};
export default sellers_controller;
