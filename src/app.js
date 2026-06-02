const express = require("express")
const userRoutes = require("./routes/userRoutes")

const app = express()

app.use(express.json())

function callbackDaRaiz( request, response ) {
    response.send("Vamos Brabos")
}

app.get("/", callbackDaRaiz)

app.use("/users", userRoutes)

module.exports = app