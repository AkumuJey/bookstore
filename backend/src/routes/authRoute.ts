import loginController from "../Controllers/loginController";
import signupController from "../Controllers/signupController";
import express from "express";

const authRoute = express.Router();

authRoute.post("/signup", signupController);
authRoute.post("/login", loginController);

export default authRoute;
