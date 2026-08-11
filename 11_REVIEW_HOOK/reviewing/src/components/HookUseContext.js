import { createContext, useState } from "react";

export const UseContext = createContext()

export const HookUseContext = ({children}) => {

    const [value, setValue ] = useState(0)

    const alterValue = () => {
        setValue(value + 1)
    }

    return (
        <UseContext.Provider value={{ value, alterValue }} >
            {children}
        </UseContext.Provider>
    )
}
