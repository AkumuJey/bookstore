import { BookModel } from "../Models/bookModel";

export const findBooks = async () => {
  const books = await BookModel.find();
  const totalCopies = books.reduce((acc, book) => acc + book.copies, 0);
  return { books, totalCopies };
};

export const addNewBook = async (bookData: any) => {
  const newBook = new BookModel(bookData);
  return newBook.save();
};
export const updateBook = async (id: string, book: any) => {
  return BookModel.findByIdAndUpdate(id, book, {
    new: true,
  });
};
export const deleteBook = async (id: string) => BookModel.findByIdAndRemove(id);
export const findOneBook = async (id: string) => BookModel.findById(id);
