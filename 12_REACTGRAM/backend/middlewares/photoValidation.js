const {body} = require("express-validator")

const photoInsertValidation = () => {
    return[
        body("title").exists({checkFalsy: true}).withMessage("O título é obrigatório!").bail().trim().isLength(
            {min: 3}).withMessage("O título precisa de no mínimo 3 caracteres!"),

        body("image").custom((value, {req}) => {
            if(!req.file){
                throw new Error("A imagem é obrigatória!")
            }
            return true
        })
    ]
}

module.exports = {photoInsertValidation}