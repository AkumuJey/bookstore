import express from 'express'

const signupRoute = express.Router()
const loginRoute = express.Router()

signupRoute.post('/', (req, res) => {
    res.send('Hellow world')
})
loginRoute.post('/', (req, res) => {
    res.send('Hellow world Login')
})

export {
    signupRoute, loginRoute
}