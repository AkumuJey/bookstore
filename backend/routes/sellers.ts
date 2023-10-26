import express, { Router, Request, Response } from 'express'

const sellersRoute:Router = express.Router()

sellersRoute.get('/', (req: Request, res: Response) => {
    res.send('I want to sell my books.')
})

export default sellersRoute
