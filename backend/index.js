import express from 'express'

const app = express()

const PORT = 5555

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})
