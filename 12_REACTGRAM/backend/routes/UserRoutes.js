const express = require("express")
const router = express.Router()

//Controller
const {register}= require("../controllers/UserController")
const {login} = require("../controllers/UserController")

//Middlewares
const validation = require("../middlewares/handleValidation")
const {userCreateValidation, userLoginValidation} = require("../middlewares/userValidations")

router.post("/register", userCreateValidation(), validation, register)
router.post("/login", userLoginValidation(), validation, login)

module.exports = router