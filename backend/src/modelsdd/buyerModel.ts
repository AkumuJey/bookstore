import mongoose, { Schema } from "mongoose";


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

export const Buyer = mongoose.model('Buyer', buyerSchema)