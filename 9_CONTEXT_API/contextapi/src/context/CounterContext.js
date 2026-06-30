// Aula 1 -> Criando o 1° context.
import { createContext, useState } from "react";

export const CounterContext = createContext()

// Aula 2 -> Criar o Provider
export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}