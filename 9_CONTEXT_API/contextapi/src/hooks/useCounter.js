import { useContext  } from "react";

import { CounterContext } from "../context/CounterContext";

export const useCounter = () => {

    //Chamando o contexto
    const context = useContext(CounterContext)

    //Validações
    if(!context){
        console.log("Contexto não encontrado!")
    }

    return context
}    