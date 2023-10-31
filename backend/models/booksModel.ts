import mongoose, {Schema} from "mongoose"
interface book {
    name: string
    id: string
    pages: number
    yearPublished: string
}

const bookSchema = new Schema({
    name: String,
    author: String,
    pages: Number,
    yearPublished: Date,
})


