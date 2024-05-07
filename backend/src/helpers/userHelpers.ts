import { compare } from "bcrypt";
import { UserModel } from "../Models/userModel";
export interface CompareResult {
  error: Error | null;
  result: boolean | null;
}

export const findUser = async (email: string) => {
  const user = await UserModel.findOne({ email });
  return user;
};
