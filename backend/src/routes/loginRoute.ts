import express from "express";
import loginController from "../Controllers/loginController";

const loginRoute = express.Router();
loginRoute.post("/", loginController);

export default loginRoute;
