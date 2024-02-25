import { BookModel } from "../Models/bookModel";
import express from "express";

const booksRoute = express.Router();

booksRoute.get("/", async (req, res) => {
  try {
    const books = await BookModel.find({});
    res.status(201).json({
      status: "Success",
      data: books,
    });
  } catch (error) {
    res.status(401).json({
      status: "Failed",
      message: error.message,
    });
  }
});

export default booksRoute;
