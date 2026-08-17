//Variables
require("dotenv").config()
const port = process.env.PORT

//Imports
const express = require("express")
const cors = require("cors")
const path = require("path")

const { router } = require("./routes/Router")

const app = express()

// Middlewares
app.use(cors({credentials: true, origin: "htpp://localhost:3000"}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

//Database connection
require("./config/db")

// Routes
app.use(router)

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})