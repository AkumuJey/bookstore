import express from 'express'
import Seller from '../models/sellerModel'




const signupRoute = express.Router()
const loginRoute = express.Router()

// signupRoute.post('/', async (req, res) => {
//     try {
//         const seller = await Seller.findOne({email: req.body.email})
//         if (seller) {
//             res.status(409).json({
//                 message: "Seller already exists"
//             })
//         }
//         if(!seller) {
//             // const salt = genSaltSync(10)
//             // const hashedPassword = hashSync(req.body.password, salt)
//             // const newSeller = new Seller({
//             //     ...req.body,
//             //     password: hashedPassword
//             // })
//             // const result = await newSeller.save()
//             res.status(201).json({
//                 result : 'Working on it',
//                 message: "Account created"
//             })
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: "Failed to store client"
//         })
//     }
// })
loginRoute.post('/', (req, res) => {
    res.send('Hellow world Login')
    
})

export {
    signupRoute, loginRoute
}