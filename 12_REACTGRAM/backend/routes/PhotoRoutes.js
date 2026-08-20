const express = require("express")
const router = express.Router()

//Controller
const {insertPhoto, deletePhoto, getAllPhotos, getUserPhoto, getPhotoById} = require("../controllers/PhotoController")

//Middlewares
const {photoInsertValidation} = require("../middlewares/photoValidation")
const {authGuard} = require("../middlewares/authGuard")
const validation = require("../middlewares/handleValidation")
const {imageUpload} = require("../middlewares/imageUpload")

//Routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validation, insertPhoto)
router.delete("/:id", authGuard, deletePhoto)
router.get("/", authGuard, getAllPhotos)
router.get("/user/:id", authGuard, getUserPhoto)
router.get("/:id", authGuard, getPhotoById)

module.exports = router