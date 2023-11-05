import express from "express"
const trial = express.Router()
trial.get('/', async (req, res) => {
    const bcrypt = await import('bcrypt-ts')
    console.log('Target hit');
    res.json({
        message: 'Working'
    })
})

export default trial