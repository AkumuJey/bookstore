import mongoose, {Schema} from "mongoose"

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

export const Book = mongoose.model('Book', bookSchema)
