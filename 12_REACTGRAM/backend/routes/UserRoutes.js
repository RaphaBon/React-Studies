const express = require("express")
const router = express.Router()

//Controller
const {register, login, getCurrentUser, update}= require("../controllers/UserController")

//Middlewares
const validation = require("../middlewares/handleValidation")
const {userCreateValidation, userLoginValidation, userUpdateValidation} = require("../middlewares/userValidations")
const { authGuard } = require("../middlewares/authGuard")
const {imageUpload} = require("../middlewares/imageUpload")


router.post("/register", userCreateValidation(), validation, register)
router.post("/login", userLoginValidation(), validation, login)
router.get("/profile", authGuard, getCurrentUser)
router.put("/", authGuard, userUpdateValidation(), validation, imageUpload.single("profileImage"), update)

module.exports = router