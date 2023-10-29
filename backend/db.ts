import { MongoClient,Db, Collection } from "mongodb"

let dbConnection : Db | null
export const connectToDb = (cb:CallableFunction) => {
    MongoClient.connect('mongodb://localhost:27017/bookstore')
    .then((client) => {
        dbConnection = client.db()
        console.log('connected');
        
        return cb()
    }).catch((err) => {
        console.log(err)
        return cb(err)
    })
}
export const getDb = () => {
    console.log('Working');
    
    return dbConnection
}

export const getCollection = (name: string):Collection | null => {
    return dbConnection?.collection(name) || null
}

