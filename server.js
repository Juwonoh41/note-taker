const express = require("express")
const api = require("./Develop/routes/api")
const html = require("./Develop/routes/html")

const app = express()
const PORT = process.env.PORT || 3001
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
//routes
app.use("/api", api)
app.use("/", html)