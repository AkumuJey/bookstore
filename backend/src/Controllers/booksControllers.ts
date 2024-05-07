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
