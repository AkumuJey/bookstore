import express, { Router, Request, Response } from 'express'

const buyersRouter: Router = express.Router()

buyersRouter.get('/', (req:Request, res: Response) => {
    res.status(200).send('Here are the buyers list []')
})


export default buyersRouter