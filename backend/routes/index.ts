import express, {Response, Request} from 'express'
import booksRoute from './books'

const router = express.Router()

router.get('/', (req : Request, res: Response) => {
    res.status(234).send('Hellow')
})
router.use('/books', booksRoute)

export default router