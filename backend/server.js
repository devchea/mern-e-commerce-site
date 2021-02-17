import dotenv from 'dotenv'
import express from 'express'

const result = dotenv.config({ path: '../.env'})
const app = express()


if (result.error) {
    throw result.error
}

console.log(result.parsed)
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on ${port}`))