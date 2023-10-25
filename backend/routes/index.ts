import express, {Response, Request} from 'express'

const router = express.Router()

router.get('/', (req : Request, res: Response) => {
    res.status(234).send('Hellow rfgetfvrbrgbrgcvdfvdfg454644')
})

export default router