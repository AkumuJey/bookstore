import sellers_controller from '../Controllers/sellers_controller'
import express, { Router } from 'express'

const sellersRoute:Router = express.Router()

sellersRoute.get('/', sellers_controller)

export default sellersRoute
