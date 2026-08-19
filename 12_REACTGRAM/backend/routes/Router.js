const express = require("express")
const router = express()

//Users Routes
router.use("/api/users", require('./UserRoutes'))

//Photo Routes
router.use("/api/photos", require("./PhotoRoutes"))

//Test route
router.get("/", (req,res) => {
    res.send("API working!")
} )


module.exports = router