const express = require("express")
const router = express.Router()

//Controller
const {register}= require("../controllers/UserController")

//Middlewares
const validation = require("../middlewares/handleValidation")
const {userCreateValidation} = require("../middlewares/userValidations")

router.post("/register", userCreateValidation(), validation, register)

module.exports = router