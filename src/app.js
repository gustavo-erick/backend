const express = require("express")

const userController = require("./controllers/userController")

const app = express()

app.use(express.json())

function callbackDaRaiz( request, response ) {
    response.send("Vamos Brabos")
}

app.get("/", callbackDaRaiz)

app.get("/users", userController.getAllUsers)

app.get("/users/:id", userController.getUserById)

app.post("/users", userController.createUser)




module.exports = app