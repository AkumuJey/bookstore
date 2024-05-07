import {
  addBookController,
  deleteBookController,
  editBookController,
  findBookController,
  getBooksController,
} from "../Controllers/booksControllers";
import express from "express";

const booksRoute = express.Router();

booksRoute.get("/", getBooksController);

booksRoute.post("", addBookController);

booksRoute.delete("/:id", deleteBookController);

booksRoute.get("/:id", findBookController);

booksRoute.patch("/:id", editBookController);

export default booksRoute;
