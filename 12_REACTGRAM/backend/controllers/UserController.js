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

//Generate hashed password
const hashedPassword = async(password) => {
    const salt = await bcrypt.genSalt()
    return await bcrypt.hash(password, salt)
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
    const passwordHash = await hashedPassword(password)

    try {
        //Create user
        const newUser = await User.create({
            name,
            email,
            password: passwordHash
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

//Sing in user
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

// Get current logged in user
const getCurrentUser = async(req,res) => {

    // We can catch the user because we put it on request in the token validation middleware
    const user = req.user
    res.status(200).json(user)

}

const update = async(req,res) => {

    const {name, password, bio} = req.body

    //Handle image
    let profileImage = null

    if(req.file){
        profileImage = req.file.filename
    }

    //Get User
    const reqUser = req.user
    const user = reqUser

    //Changes
    if(name){
        user.name = name
    }

    if(password){
        user.password = await hashedPassword(password)
    }

    if(bio){
        user.bio = bio
    }

    //Update user
    await user.save()

    res.status(200).json(user)
}

//Get user by id
const getUserById = async(req,res) => {

    const {id} = req.params

    try {
        const user = await User.findById(id).select("-password")

        if(!user){
            res.status(404).json({errors: ["Usuário não encontrado!"]})
            return
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({errors: ["Usuário não encontrado!"]})
    }

    
}


module.exports = {register, login, getCurrentUser, update, getUserById}