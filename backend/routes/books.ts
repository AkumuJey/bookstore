import express from 'express'
import { getCollection } from '../db'
import { Collection, ObjectId } from 'mongodb'

const booksRoute = express.Router()

booksRoute.get('/', async (req, res) => {
    try {
        const booksCollection: Collection | null = getCollection('books')
        if (booksCollection) {
            let booksArray = await booksCollection.find().toArray()
            res.status(200).json({
                count: booksArray.length,
                data: booksArray
            })
        } else {
            res.status(500).send({message: 'Failed to fetch'})
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
        if (result?.acknowledged) {
            res.status(200).send({message: 'Added New Book Successfully'})
        }
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
        if (result?.acknowledged) {
            res.status(200).send('Deleted book successfully')
        } else {
            res.status(404).send('Could not find the book with that ID')
        }
    } catch (error) {
        res.status(500).send({message: 'Failed to Delete the book'})
    }
})

//updating a book

booksRoute.put('/:id', async(req, res) => {
    const id = req.params.id
    try {
        const bookId = new ObjectId(id)
        const booksCollection = getCollection('books')
        const updatedBook = req.body
        const result = await booksCollection?.updateOne({ _id : bookId }, {$set: updatedBook} )
        if (result?.acknowledged) {
            res.status(200).send('Updated book successfully')
        } else {
            res.status(500).send({
                message: "Error updating book"
            })
        }
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
        const booksCollection = getCollection('books')
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