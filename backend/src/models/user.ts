import { genSalt, hash } from "bcrypt";
import { Schema, model } from "mongoose";
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    length: 8,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "user"],
  },
});

// Create and export MongoDB model for a user
export const UserModel = model("users", userSchema);

export const findExistingUser = async (queryStr: string) => {
  let userPresent = await UserModel.findOne({ queryStr });
  return userPresent;
};

export const createUser = async (
  email: string,
  password: string,
  username: string,
  role: string
) => {
  try {
    genSalt(10)
      .then((salt) => hash(password + process.env.SECRET_PASSWORD, salt))
      .then(async (hashedPassword) => {
        const newUser = new UserModel({
          email,
          password: hashedPassword,
          username,
          role,
        });
        const registeredUser = await newUser.save();
        return registeredUser
      });
  } catch (error) {
    throw error
  }
};
