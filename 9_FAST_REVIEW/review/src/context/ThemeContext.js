import { createContext } from "react";

import { useReducer } from "react";


export const ThemeContext = createContext()

export const themeChangerReducer = (state, action) => {

    switch(action.type){
        case "BLACK":
            return {...state, theme: "black"}
        case "WHITE":
            return {...state, theme: "white"}
        default:
            return state
    }

}

export const ThemeContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(themeChangerReducer, {theme: "white"})

    return(
        <ThemeContext.Provider value={{...state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )

}