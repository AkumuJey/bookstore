import mongoose, {Schema} from "mongoose"

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

export const Seller = mongoose.model('Seller', sellerSchema)