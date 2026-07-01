import { useContext } from "react";

import { EmailContext } from '../context/EmailContext'

export const useEmail = () => {

    const context = useContext(EmailContext)

    if(!context){
        console.log("Erro ao carregar o Context!")
    }

    return context
}