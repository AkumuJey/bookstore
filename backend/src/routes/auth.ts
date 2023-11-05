import { UserModel, createUser, getUserByEmail } from '../db/users'
import express from 'express'

const signupRoute = express.Router()
const loginRoute = express.Router()

signupRoute.post('/', async (req, res) => {
    try {
        const {email, password, role} = req.body
        console.table(req.body);
        
        if (!email || !password || !role) {
            return res.status(500).send({
                error: "Must provide email, password, and role"
            })
        }
        const userExists = getUserByEmail(email)
        console.log(userExists);
        
        if (userExists) {
            // let p = (await UserModel.findOne({email: email})).toObject()
            return res.status(500).send({
                message: "Exists"
            })
        }
        const results = createUser({email, password, role})
        return results
        // if (getUserByEmail(email)) {
        //     return res.status(500).send({
        //         error: "Account already exists for this email."
        //     })
        // }
        // const { createUser } = await import('db/users')
        // let newUser = await createUser({email, password, role})
        return res.status(200).send('Success')
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            message: "Failed to store client",
            error
        })
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
