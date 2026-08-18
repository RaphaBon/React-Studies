const {body} = require("express-validator")

const userCreateValidation = () => {
    return[
        body("name").exists({checkFalsy: true}).withMessage("O nome é obrigatório!").bail().trim().isLength(
            {min: 3}).withMessage("O nome precisa conter no mínimo 3 caracteres!"),

        body("email").exists({checkFalsy: true}).withMessage("O email é obrigatório!").bail().trim().
            isEmail().withMessage("Insira um e-mail válido!"),

        body("password").exists({checkFalsy: true}).withMessage("A senha é obrigatória!").bail().trim().
            isLength({min: 5}).withMessage("A senha precisa conter no mínimo 5 caracteres!"),

        body("confirmpassword").exists({checkFalsy: true}).withMessage("A confirmação de senha é obrigatória!").bail().trim().
            custom((value, {req}) => {
                if(value != req.body.password){
                    throw new Error("As senhas não são iguais!")
                }
                return true
            })
    ]
}

const userLoginValidation = () => {
    return[
        body("email").exists({checkFalsy: true}).withMessage("O email é obrigatório").bail().trim().
            isEmail().withMessage("Insira um e-mail válido!"),
        body("password").exists({checkFalsy: true}).withMessage("A senha é obrigatória!").bail().trim().
            isLength({min: 5}).withMessage("A senha precisa conter no mínimo 5 caracteres!")  
    ]
}

const userUpdateValidation = () => {
    return[
        body("name").optional().isLength({min: 3}).withMessage("O nome precisa conter no mínimo 3 caracteres!"),
        body("password").optional().isLength({min: 5}).withMessage("A senha precisa conter no mínimo 5 caracteres!") 
    ]


}

module.exports = {userCreateValidation, userLoginValidation, userUpdateValidation}