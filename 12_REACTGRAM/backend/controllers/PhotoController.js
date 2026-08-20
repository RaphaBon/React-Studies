const Photo = require("../models/Photo")
const mongoose = require("mongoose")

//Insert a photo with an user related to it
const insertPhoto = async(req, res) => {
    const {title} = req.body 
    const image = req.file.filename
    const user = req.user

    try {
        const newPhoto = await Photo.create({
            image,
            title,
            userId: user._id,
            userName: user.name
        })

        if(!newPhoto){
            res.status(422).json({errors: ["Houve um problema, tente novamente mais tarde!"]})
            return
        }

        res.status(201).json(newPhoto)
    } catch (error) {
        res.status(500).json({errors: [error.message]})
    }
}

//Delete a photo by id
const deletePhoto = async(req, res) => {

    const {id} = req.params
    const user = req.user

    try {
        const photo = await Photo.findById(id)

        //Check if photo exists
        if(!photo){
            res.status(404).json({errors: ["Foto não encontrada!"]})
            return
        }

        //Check if photo belongs to user
        if(!photo.userId.equals(user._id)){
            res.status(422).json({errors: ["Erro ao excluir a foto, tente novamente mais tarde"]})
            return
        }

        await Photo.findByIdAndDelete(photo._id)

        res.status(200).json({id: photo._id, message: "Foto excluída com sucesso!"})
    } catch (error) {
        res.status(500).json({errors: ["Erro ao deletar a foto"]})
        return
    }
    
}

//Get all photos
const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find({}).sort([["createdAt", -1]])
        res.status(200).json(photos)
    } catch (error) {
        res.status(500).json({ errors: [error.message] })
    }
}

//Get user photo
const getUserPhoto = async (req,res) => {

    const {id: userId} = req.params

    try{
        const photos = await Photo.find({userId}).sort([["createdAt", -1]])
        res.status(200).json(photos)

    }catch(error){
        res.status(500).json({errors: ["Erro ao carregar a foto"]})
    }

}

//Get photo by id
const getPhotoById = async (req,res) => {
    const {id} = req.params

    try { 
        const photo = await Photo.findById(id)

        if(!photo){
            res.status(404).json({errors: ["Foto não encontrada."]})
            return
        }

        res.status(200).json(photo)
    } catch (error) {
        res.status(500).json({errors: ["Erro ao carregar a foto."]})
    }
}

//Update a photo
const updatePhoto = async (req,res) => {

    const {id} = req.params
    const {title} = req.body
    const user = req.user

    try {
        //Check if photo exists
        const photo = await Photo.findById(id)
        if(!photo){
            res.status(404).json({errors: ["Foto não encontrada"]})
            return
        }

        //Check if photo belongs to user
        if(!photo.userId.equals(user._id)){
            res.status(422).json({errors: ["Ocorreu um erro, tente novamente mais tarde"]})
            return
        }

        if(title){
            photo.title = title
        }

        await photo.save()
        res.status(200).json({photo, message: "Foto atualizada com sucesso!"})

    } catch (error) {
        res.status(500).json({errors: ["Erro ao atualizar a foto"]})
    }

}

//Like functionality
const like = async (req,res) => {

    const {id} = req.params
    const user = req.user

    try {
        //Check if photo exists
        const photo = await Photo.findById(id)
        if(!photo){
            res.status(404).json({errors: ["Foto não encontrada."]})
            return
        }

        //Check if user already liked
        if(photo.likes.includes(user._id)){
            res.status(422).json({errors: ["Você já curtiu a foto."]})
            return
        }

        //Put user id in like array
        photo.likes.push(user._id)
        await photo.save()

        res.status(200).json({photoId: id, userId: user._id, message: "A foto foi curtida"})

    } catch (error) {
        res.status(500).json({errors: ["Erro ao curtir a foto"]})
    }

}


module.exports = {
insertPhoto, 
deletePhoto, 
getAllPhotos, 
getUserPhoto,
getPhotoById, 
updatePhoto,
like}

