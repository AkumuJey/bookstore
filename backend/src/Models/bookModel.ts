import { Schema, model } from "mongoose";

//Book Schema and model
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
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
    availableCopies: {
      type: Number,
      required: true,
    },
    soldCopies: {
      type: Number,
      default: 0,
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
