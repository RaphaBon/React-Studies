const express = require("express")
const router = express.Router()

//Controller
const {
insertPhoto, 
deletePhoto, 
getAllPhotos, 
getUserPhoto, 
getPhotoById, 
updatePhoto, 
like,
comments,
searchPhotos} = require("../controllers/PhotoController")

//Middlewares
const {photoInsertValidation, photoUpdateValidation, commentsValidation} = require("../middlewares/photoValidation")
const {authGuard} = require("../middlewares/authGuard")
const validation = require("../middlewares/handleValidation")
const {imageUpload} = require("../middlewares/imageUpload")

//Routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validation, insertPhoto)
router.delete("/:id", authGuard, deletePhoto)
router.get("/", authGuard, getAllPhotos)
router.get("/user/:id", authGuard, getUserPhoto)
router.get("/search", authGuard, searchPhotos)
router.get("/:id", authGuard, getPhotoById)
router.put("/:id", authGuard, photoUpdateValidation(), validation, updatePhoto)
router.put("/like/:id", authGuard, like)
router.put("/comments/:id", authGuard, commentsValidation(), validation, comments)

module.exports = router