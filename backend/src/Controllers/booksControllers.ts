import { Request, Response } from "express";
import { BookModel } from "../Models/bookModel";

export const getBooksController = async (req: Request, res: Response) => {
  try {
    const books = await BookModel.find({});
    return res.status(201).json({
      status: "Success",
      data: books,
      length: books.length,
    });
  } catch (error) {
    return res.status(401).json({
      status: "Failed",
      message: error.message,
    });
  }
};

export const addBookController = async (req: Request, res: Response) => {
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
      status: "Failed",
      message: error.message,
    });
  }
};

export const deleteBookController = async (req: Request, res: Response) => {
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
};

export const findBookController = async (req: Request, res: Response) => {
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
      message: error.message,
    });
  }
};

export const editBookController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const body = req.body;
    if (!id) {
      return res.status(500).json({ status: "Invalid ID" });
    }
    const updateBook = await BookModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json({
      status: "Updated",
      data: updateBook,
      body,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
