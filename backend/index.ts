import express, {Express} from 'express'
import router from './routes'
import mongoose from 'mongoose'

//Initialization of the app and middlewares
const app: Express = express()
app.use(express.json())


app.use('/', router)

const PORT = 5000
//Connecting to db
export let db : mongoose.Connection
const uri = 'mongodb://localhost:27017/bookstore'
mongoose.connect(uri).then(() => {
    console.log('Connected Successfully');
    app.listen(PORT, () => {
        console.log(`App is running at ${PORT}`);
        db = mongoose.connection
    })
}).catch(() => {
    console.error("Failed to Connect");
})





