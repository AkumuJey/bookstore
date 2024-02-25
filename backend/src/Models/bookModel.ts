import mongoose, { Schema, model } from "mongoose";

//Book Schema and model
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    yearPublished: {
      type: Number,
      required: true,
    },
    edition: {
      type: Number,
      required: true,
    },
    copies: {
      type: Number,
      required: true,
    },
    favs: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    comments: [
      {
        commenterName: {
          type: String,
          required: function () {
            return this.comments && this.comments.length > 0;
          },
        },
        commentText: {
          type: String,
          required: function () {
            return this.comments && this.comments.length > 0;
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const BookModel = model("book", bookSchema);
