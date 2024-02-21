import signupController from "controllers/control";
import express from "express";



const signupRoute = express.Router();


signupRoute.post("/", signupController);


export default signupRoute
//export
