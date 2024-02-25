import { BookModel } from "../Models/bookModel";
import express from "express";

const booksRoute = express.Router();

booksRoute.get("/", async (req, res) => {
  try {
    const books = await BookModel.find({});
    res.status(201).json({
      status: "Success",
      data: books,
      length: books.length
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
        const bookData = req.body
        const  newBook = new BookModel(bookData);
        await newBook.save()
        res.status(201).json({
            status:"success",
            data:newBook
        })
    } catch (error) {
        res.status(401).json({
            status:"Faild",
            message : error.message
        })
    }
})

export default booksRoute;
