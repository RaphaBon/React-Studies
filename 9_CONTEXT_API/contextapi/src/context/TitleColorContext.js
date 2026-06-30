import { createContext, useContext, useReducer } from "react";

//Criando o Context e o Provider
export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
    
    //Pegando o action e criando a possibilidade de alterar o valor, onde vamos consumir 
    //isso lá na home com um botão de "escolher cor do text"
    switch(action.type){
        case "RED":
            return {...state, color: "red"}
        case "BLUE":
            return {...state, color: "blue"}
        default:
            return state //Se ninguem alterar nada, retorna a cor roxa.
    }
}

export const TitleColorContextProvider = ({children}) => {

    //State (O que o hook está gerenciando (neste caso é a cor do título) e Dispatch (o que vai alterar o contexto))
    //Onde neste caso, passamos quem vai alterar o estado (titleColorReducer) e o estado inicial (cor: purple)
    const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"})

    return (
        //Aqui no value passamos um objeto com o state para poder ser consumido 
        <TitleColorContext.Provider value={{... state, dispatch}} >
            {children}
        </TitleColorContext.Provider>
    )
}