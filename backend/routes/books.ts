import express from 'express'

const booksRoute = express.Router()


const books = [
    { id: 1, title: "Book One", author: "Author One" },
    { id: 2, title: "Book Two", author: "Author Two" },
]
booksRoute.get('/', (req, res) => {
    res.json(books)
    // res.status(200).send(JSON.stringify(books))
})

export default booksRoute