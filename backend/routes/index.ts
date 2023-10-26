import express, {Response, Request} from 'express'
import booksRoute from './books'
import buyersRouter from './buyers'
import sellersRoute from './sellers'

const router = express.Router()

router.get('/', (req : Request, res: Response) => {
    res.status(234).send('Hellow')
})
router.use('/books', booksRoute)
router.use('/buyers', buyersRouter)
router.use('/sellers', sellersRoute)

export default router