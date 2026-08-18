//Model
const User = require("../models/User")

//Token and password config
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

//Generate user token
const generateToken = (id) => {
    return jwt.sign({id}, jwtSecret, {expiresIn: "7d"})
}

//Register and sign in user
const register = async(req, res) => {
    
    const {name, email, password} = req.body

    //Check if user exists
    const checkIfUserExists = await User.findOne({email})

    if(checkIfUserExists){
        res.status(422).json({errors: ["Não foi possível realizar o cadastro"]})
        return
    }

    //Generate hashed password
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    try {
        //Create user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        //If user was created sucessfully:
        if(!newUser){
            return res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde!"]})
        }

        return res.status(201).json({
            _id: newUser._id,
            token: generateToken(newUser._id)
        })

    } catch (error) {
        return res.status(500).json({
            errors: [error.message]
        })
    }


}

const login = async(req, res) => {
    
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(!user){
        res.status(422).json({errors: ["Erro ao realizar o login!"]})
        return
    }

    //Check if password matches
    if(!await(bcrypt.compare(password, user.password))){
        res.status(422).json({errors: ["Erro ao realizar o login!"]})
        return
    }

    try {
        
        res.status(201).json({
            _id: user._id,
            profileImage: user.profileImage,
            token: generateToken(user._id)
        })


    } catch (error) {
        return res.status(500).json({
            errors: [error.message]
        })
    }



}


module.exports = {register, login}