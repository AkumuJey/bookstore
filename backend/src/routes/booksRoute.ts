import {
  addBookController,
  checkIdParam,
  deleteBookController,
  editBookController,
  findBookController,
  getBooksController,
} from "../Controllers/booksControllers";
import express from "express";

const booksRoute = express.Router();

booksRoute.get("/", getBooksController);

booksRoute.post("", addBookController);

booksRoute.delete("/:id", checkIdParam, deleteBookController);

booksRoute.get("/:id", checkIdParam, findBookController);

booksRoute.patch("/:id", checkIdParam, editBookController);

export default booksRoute;
