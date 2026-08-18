const express = require("express")
const router = express.Router()

//Controller
const {register, login, getCurrentUser}= require("../controllers/UserController")

//Middlewares
const validation = require("../middlewares/handleValidation")
const {userCreateValidation, userLoginValidation} = require("../middlewares/userValidations")
const { authGuard } = require("../middlewares/authGuard")


router.post("/register", userCreateValidation(), validation, register)
router.post("/login", userLoginValidation(), validation, login)
router.get("/profile", authGuard, getCurrentUser)

module.exports = router