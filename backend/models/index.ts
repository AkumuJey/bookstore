import mongoose, { Schema } from "mongoose";

//Book Schema and model
const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        yearPublished: {
            type: Number,
            required: true
        },
        edition: {
            type: Number,
            required: true
        },
        copies: {
            type: Number,
            required: true
        },
        favs: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        comments: [
            {
                commenterName: {
                    type: String,
                    required: true
                },
                commentText: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    {
        timestamps: true
    }
)

const Book = mongoose.model('Book', bookSchema)

const buyerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        phoneNumber: String,
        address: String,
        purchaseStats: {
            totalPurchases: {
                type: Number,
                required: true
            },
            amountSpent: {
                type: Number,
                required: true
            }
        }
    },
    {
        timestamps: true
    }
)

const Buyer = mongoose.model('Buyer', buyerSchema)

const sellerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        retailStats: {
            totalPurchases: {
                type: Number,
                required: true
            },
        }
    },
    {
        timestamps: true
    }
)

const Seller = mongoose.model('Seller', sellerSchema)

export { Book, Buyer, Seller }