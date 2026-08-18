//Model
const User = require("../models/User")

//Token and password config
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

//Generate user token
const generateToken = (id) => {
    return jwt.sign(id, jwtSecret, {expiresIn: "7d"})
}

//Register and sign in user
const register = async(req, res) => {
    res.send("Registro!")
}



module.exports = {register}