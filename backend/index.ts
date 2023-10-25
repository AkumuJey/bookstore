import express, {Express, Response, Request} from 'express'
import router from './routes'


const app: Express = express()
app.get('/', router)

const PORT = 5550

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})
