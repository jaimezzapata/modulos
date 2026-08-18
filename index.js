import express from 'express'
import { conn } from './src/config/database.js'
const app = express()

const PORT = 3000
const SERVER = "http://localhost:"
const URL = SERVER + PORT

app.listen(PORT, () => {
    console.log("Servidor funcionando de forma correcta. URL: " + URL)
})

conn.authenticate()
    .then(() => console.log("Conexión establecida..."))
    .catch((error) => console.log(error))


    