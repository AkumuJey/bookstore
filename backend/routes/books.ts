import express from 'express'

import { db } from '..'



const booksRoute = express.Router()

//Getting the list of books
booksRoute.get('/', async (req, res) => {
    try {
        const booksCollection = db.collection('books')
        if (booksCollection) {
            let booksArray = await booksCollection.find().toArray()
            res.status(200).json({
                count: booksArray.length,
                data: booksArray
            })
        }
    } catch (error) {
        console.log('Failed to send');
        res.status(500).send({message: 'Failed to fetch'})
    }
})

//Adding a book
booksRoute.post('/', async (req, res) => {
    const newBook = req.body
    try {
        const booksCollection = db.collection('books')
        const result = await booksCollection?.insertOne(newBook)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({message: 'Failed to add new book'})
    }
})

//Deleting a new books
booksRoute.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const booksCollection = db.collection('books')
        const x = await booksCollection.find().toArray()
        res.send(x)
    } catch (error) {
        res.status(500).send({message: 'Failed to Delete the book'})
    }
})

//updating a book

booksRoute.patch('/:id', async(req, res) => {
    const id = req.params.id
    try {
        const updatedBook = req.body
        const booksCollection = db.collection('books')
        res.send('Hello')
        res.status(200)
    } catch (error) {
        res.status(500).send({
            message: "Error updating book"
        })
    }
})

//Getting single book

booksRoute.get('/:id',async (req, res) => {
    const id = req.params.id
    try {
        const booksCollection = db.collection('books')
        res.send('Hello')
    } catch (error) {
        res.status(500).send({
            message: "Failed to get book"
        })
    }
})



export default booksRoute