import express, { Express } from "express";
import router from "./routes";
import mongoose from "mongoose";
import { config } from "dotenv";
//Initialization of the app and middlewares
config();
const app: Express = express();
app.use(express.json());
app.use("/", router);

//Connecting to db
export let db: mongoose.Connection;
const uri = process.env.DATABASE_URI;
const PORT = process.env.PORT;
//Connecting to databse then starting server
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(PORT, () => {
      console.log(`App is running at http://localhost:${PORT}`);
      db = mongoose.connection;
    });
  })
  .catch(() => {
    console.error("Failed to Connect");
  });
