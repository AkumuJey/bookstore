import { sellersController } from "../Controllers/sellersController";
import express, { Router } from "express";

const sellersRoute: Router = express.Router();

sellersRoute.get("/", sellersController);

export default sellersRoute;
