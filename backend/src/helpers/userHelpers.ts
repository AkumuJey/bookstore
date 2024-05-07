import { compare } from "bcrypt";
import { UserModel } from "../Models/userModel";
interface NewUser {
  email: string;
  password: string;
  username: string;
  role: string;
}

export const findUser = async (email: string) => {
  const user = await UserModel.findOne({ email });
  return user;
};

export const registerUser = async ({
  email,
  password,
  username,
  role,
}: NewUser) => {
  const newUser = await new UserModel({
    email,
    password,
    username,
    role,
  }).save();
  return newUser;
};
