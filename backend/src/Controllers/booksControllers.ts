import { NextFunction, Request, Response } from "express";
import {
  addNewBook,
  deleteBook,
  findBooks,
  findOneBook,
  updateBook,
} from "../helpers/booksHelper";

export const checkIdParam = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ status: "Invalid ID" });
  }
  next();
};

export const getBooksController = async (req: Request, res: Response) => {
  try {
    const { books, totalAvailableCopies } = await findBooks();
    return res.status(201).json({
      status: "Success",
      books,
      totalBookTypes: books.length,
      totalAvailableCopies,
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
    const newBook = await addNewBook(req.body);
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
    const result = await deleteBook(id);
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
    const book = await findOneBook(id);
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
    const updatedBook = await updateBook(id, req.body);
    res.status(201).json({
      status: "Updated",
      data: updatedBook,
      body,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
