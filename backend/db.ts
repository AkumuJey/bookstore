import { MongoClient,Db } from "mongodb"

let dbConnection : Db | null
export const connectToDb = (cb:CallableFunction) => {
    MongoClient.connect('mongodb://localhost:27017/bookstore')
    .then((client) => {
        dbConnection = client.db()
        return cb()
    }).catch((err) => {
        console.log(err)
        return cb(err)
    })
}
export const getDb = () => dbConnection