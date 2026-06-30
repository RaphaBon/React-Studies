//Aula 3 -> Importanto o alterador do Context
import ChangeCounter from "../components/ChangeCounter"
import { TitleColorContext } from "../context/TitleColorContext"
//import { CounterContext } from "../context/CounterContext"

//Aula 2 -> Hook para usar o Context
//import { useContext } from "react"

//Aula 4 -> Importando o hook que substitui o useContext
import { useCounter } from "../hooks/useCounter"

//Aula 5 -> Hook do titleColor
import { useTitleColor } from "../hooks/useTitleColor"

const Home = () => {

  //Aula 2 -> Consumimos os valores que estão sendo compartilhados lá do context aqui na home
  //const {counter} = useContext(CounterContext)

  //Aula 4 -> Usando o hook como context
  const {counter} = useCounter()

  //Aula 5 -> Context do título
  const {color, dispatch} = useTitleColor()

  //Aula 6 -> Alterando state complexo
  const setTitleColor = (color) => {
    dispatch({type: color}) //Mandamos o tipo de action que é pedida lá no context
  }

  return (
    <div>
        <h1 style={{color: color}} >Estamos na HOME</h1>
        <p>Valor do context {counter}</p>
        {/* 3 - > Alternado o valor do contexto */}
        <ChangeCounter/>
        {/* 6 -> Alterando contexto complexo */}
        <div>
          <button onClick={() => setTitleColor("RED")} >Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")} >Azul</button>
        </div>
    </div>
  )
}

export default Home