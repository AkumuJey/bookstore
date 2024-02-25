import { Schema, model } from "mongoose";
const userSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export const UserModel = model("users", userSchema);



