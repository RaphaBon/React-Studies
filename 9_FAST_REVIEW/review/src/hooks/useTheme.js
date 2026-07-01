import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {

    const context = useContext(ThemeContext)

    if(!context){
        console.log("Erro ao carregar o Context!!")
    }

    return context
}