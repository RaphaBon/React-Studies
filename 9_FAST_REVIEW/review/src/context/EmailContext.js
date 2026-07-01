import { createContext, useState } from "react";

//Context
export const EmailContext = createContext()

//Provider
export const EmailContextProvider = ({children}) => {

    const [email, setEmail] = useState("")

    return(
        <EmailContext.Provider value={{email, setEmail}} >
            {children}
        </EmailContext.Provider>
    )



}