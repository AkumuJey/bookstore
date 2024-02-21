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
export const UserModel = model("user", userSchema);

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

// Create user
export const createUser = async(data: any) => {
    try {
        const newUser = new UserModel(data).save().then(user => user.toObject())
        return newUser
    } catch (error) {
        return error
    }
}
//Get user by id
export const getUserById = async(id: string) =>{
    try {
        const user = UserModel.findById(id)
        return user
    } catch (error) {
        return error
    }
}
//Delete user
export const deleteUser = async(id:string)=>{
    try {
        const deleteUser = UserModel.findByIdAndDelete(id)
        return deleteUser
    } catch (error) {
        return error
    }
}
//update user details.
export const updateDetails = async(id:string, data:any) =>{
    try {
        const detailsUpate = UserModel.findByIdAndUpdate(id, data)
        return detailsUpate
    } catch (error) {
        return error
    }
}

