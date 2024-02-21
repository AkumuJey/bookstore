import express from "express";
import loginController from "../Controllers/login_controller";

const loginRoute = express.Router();
loginRoute.post("/", loginController);

export default loginRoute;
