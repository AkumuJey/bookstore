import { Schema, model, } from "mongoose";
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

//get users
export const getUsers = async() => {
    try {
        const users = UserModel.find()
        return users
    } catch (error) {
        return error
    }
}

// Get user by email
export const getUserByEmail = async(email: String) => {
    try {
        const userExist = UserModel.findOne({email: email})
        return userExist
    } catch (error) {
        return error
    }
}


