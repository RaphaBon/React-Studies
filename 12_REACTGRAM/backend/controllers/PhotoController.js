const Photo = require("../models/Photo")
const mongoose = require("mongoose")

//Insert a photo with an user related to it
const insertPhoto = async(req, res) => {

    // Gettin datas
    const {title} = req.body 
    const image = req.file.filename
    const user = req.user

    // Create photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name
    })

    // If photo was created successfully, return data
    if(!newPhoto){
        res.status(422).json({errors: ["Houve um problema, tente novamente mais tarde!"]})
        return
    }

    res.status(201).json(newPhoto)

}

//Delete a photo by id
const deletePhoto = async(req, res) => {

    const {id} = req.params
    const user = req.user

    try {
        console.log(id)
        const photo = await Photo.findById(id)

        //Check if photo exists
        if(!photo){
            res.status(404).json({errors: ["Foto não encontrada!"]})
            return
        }

        //Check if photo belongs to user
        if(!photo.userId.equals(user._id)){
            res.status(422).json({errros: ["Erro ao excluir a foto, tente novamente mais tarde"]})
            return
        }

        await Photo.findByIdAndDelete(photo._id)

        res.status(200).json({id: photo._id, message: "Foto excluída com sucesso!"})
    } catch (error) {
        res.status(404).json({errors: ["Foto não encontrada!"]})
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


module.exports = {insertPhoto, deletePhoto, getAllPhotos}

