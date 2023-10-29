import express from 'express'
import { getCollection } from '../db'
import { Collection } from 'mongodb'

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

booksRoute.post('/', async (req, res) => {
    const newBook = req.body
    try {
        const booksCollection: Collection | null = getCollection('books')
        await booksCollection?.insertOne(newBook)
        res.status(200).send({message: 'Added New Book Successfully'})
    } catch (error) {
        res.status(500).send({message: 'Failed to add new book'})
    }
})



export default booksRoute