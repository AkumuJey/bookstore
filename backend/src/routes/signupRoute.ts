import signupController from "../Controllers/signupController";
import express from "express";

const signupRoute = express.Router();
signupRoute.post("/", signupController);

export default signupRoute;
