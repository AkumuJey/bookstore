import express, {Express} from 'express'
import { connectToDb, getDb } from './db'
import router from './routes'

//Initialization of the app and middlewares
const app: Express = express()
app.use(express.json())


app.use('/', router)

const PORT = 5000
//Connecting to db

let db
connectToDb((err : Error) => {
    if (!err) {
        app.listen(PORT, () => {
            console.log(`App is running at ${PORT}`);
        })
        db = getDb()
    } else {
        console.log('Failed o connect');
        
    }
})





