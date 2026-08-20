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
like} = require("../controllers/PhotoController")

//Middlewares
const {photoInsertValidation, photoUpdateValidation} = require("../middlewares/photoValidation")
const {authGuard} = require("../middlewares/authGuard")
const validation = require("../middlewares/handleValidation")
const {imageUpload} = require("../middlewares/imageUpload")

//Routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validation, insertPhoto)
router.delete("/:id", authGuard, deletePhoto)
router.get("/", authGuard, getAllPhotos)
router.get("/user/:id", authGuard, getUserPhoto)
router.get("/:id", authGuard, getPhotoById)
router.put("/:id", authGuard, photoUpdateValidation(), validation, updatePhoto)
router.put("/like/:id", authGuard, like)

module.exports = router