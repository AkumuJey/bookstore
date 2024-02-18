import { UserModel, createUser, getUserByEmail } from '../db/users'
import express from 'express'

const signupRoute = express.Router()
const loginRoute = express.Router()

signupRoute.post('/', async (req, res) => {
    const {email, password, username, role} = req.body
    try {
        const userPresent = await UserModel.findOne({email})
    console.log(userPresent)

    if(userPresent) {
        res.status(400).send({error: "User already exists"})
        return
    }
    const newUser = UserModel.create({ email, password, username, role })
    res.json({ message: "Signing up user...", email, password, newUser })
    } catch (error) {
        res.status(400).send({error})
    }
})
loginRoute.post('/', async (req, res) => {
    const users = await UserModel.find()
    res.send(users)
    
})

export {
    signupRoute, loginRoute
}
//export
