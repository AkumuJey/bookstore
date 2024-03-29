import { BookModel } from "../Models/bookModel";
import express from "express";

const booksRoute = express.Router();

booksRoute.get("/", async (req, res) => {
  try {
    const books = await BookModel.find({});
    res.status(201).json({
      status: "Success",
      data: books,
      length: books.length,
    });
  } catch (error) {
    res.status(401).json({
      status: "Failed",
      message: error.message,
    });
  }
});

booksRoute.post("", async (req, res) => {
  try {
    const bookData = req.body;
    const newBook = new BookModel(bookData);
    await newBook.save();
    res.status(201).json({
      status: "success",
      data: newBook,
    });
  } catch (error) {
    res.status(401).json({
      status: "Faild",
      message: error.message,
    });
  }
});

booksRoute.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ status: "Invalid ID" });
      return;
    }
    const result = await BookModel.findByIdAndRemove(id);
    res.status(200).json({ status: "Deleted", result });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
});

booksRoute.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ status: "Invalid ID" });
      return;
    }
    const book = await BookModel.findById(id);
    res.status(200).json({
      status: "Success",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
});

booksRoute.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    if (!id) {
      res.status(400).json({ status: "Invalid ID" });
      return;
    }
    const updateBook = await BookModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json({
      status: "Updated",
      data: updateBook,
      body
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
});

export default booksRoute;
