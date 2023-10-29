import express from 'express'
import { getCollection } from '../db'
import { Collection, ObjectId } from 'mongodb'

const booksRoute = express.Router()

//Getting the list of books
booksRoute.get('/', async (req, res) => {
    try {
        const booksCollection: Collection | null = getCollection('books')
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
        const booksCollection: Collection | null = getCollection('books')
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
        const bookId = new ObjectId(id)
        const booksCollection: Collection | null = getCollection('books')
        const result = await booksCollection?.deleteOne({_id: bookId})
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({message: 'Failed to Delete the book'})
    }
})

//updating a book

booksRoute.patch('/:id', async(req, res) => {
    const id = req.params.id
    try {
        const bookId = new ObjectId(id)
        const updatedBook = req.body
        const booksCollection: Collection | null = getCollection('books')
        const result = await booksCollection?.updateOne({ _id : bookId }, {$set: updatedBook} )
        res.status(200).send(result)
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
        const bookId = new ObjectId(id)
        const booksCollection: Collection | null = getCollection('books')
        const foundBook = await booksCollection?.findOne({_id: bookId})
        if (foundBook) {
            res.status(200).json(foundBook)
        }
    } catch (error) {
        res.status(500).send({
            message: "Failed to get book"
        })
    }
})



export default booksRoute