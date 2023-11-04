import express from 'express'
import { Seller, SellerType } from '../models/sellerModel'


const signupRoute = express.Router()
const loginRoute = express.Router()

signupRoute.post('/', async (req, res) => {
    try {
        const seller = await Seller.findOne({email: req.body.email})
        if (seller) {
            res.status(409).json({
                message: "Seller already exists"
            })
        }
        if(!seller) {
            res.status(201).json({
                message: "Account created"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Failed to store client"
        })
    }
})
loginRoute.post('/', (req, res) => {
    res.send('Hellow world Login')
    
})

export {
    signupRoute, loginRoute
}