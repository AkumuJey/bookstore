import express, {Express, Response, Request} from 'express'


const app: Express = express()
app.get('/', (req : Request, res: Response) => {
    res.status(234).send('Hellow rfgetfvrbrgbrg')
})

const PORT = 5550

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})
