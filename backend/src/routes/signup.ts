import signupController from "controllers/signup_controller";
import express from "express";
const signupRoute = express.Router();


signupRoute.post("/", signupController);


export default signupRoute
//export
