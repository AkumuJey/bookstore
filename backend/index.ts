import express, {Response, Request} from 'express'


const app = express()
app.get('/', (req : Request, res: Response) => {
    res.status(234).send('Hellow World')
})

const PORT = 5555

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})
