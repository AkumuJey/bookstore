import express from 'express'
import { getCollection } from '../db'
import { Collection } from 'mongodb'

const booksRoute = express.Router()


const books = [
    { id: 1, title: "Book One", author: "Author One" },
    { id: 2, title: "Book Two", author: "Author Two" },
]
booksRoute.get('/', (req, res) => {
    try {
        const booksCollection: Collection | null = getCollection('books')
        booksCollection?.insertOne(books[1])
        res.json('Successs')
    } catch (error) {
        console.log('Failed to send');
    }
})

export default booksRoute