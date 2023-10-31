import express from 'express'
import booksRoute from './books'
import buyersRouter from './buyers'
import sellersRoute from './sellers'
import { loginRoute, signupRoute } from './auth'

const router = express.Router()

router.get('/', (req, res) => {
    res.status(234).send('Hellow')
})
router.use('/books', booksRoute)
router.use('/buyers', buyersRouter)
router.use('/sellers', sellersRoute)
router.use('/login', loginRoute)
router.use('/signup', signupRoute)

export default router