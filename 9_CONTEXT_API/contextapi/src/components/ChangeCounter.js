// 3 - Alterando Contexto
import { useContext } from "react";

import { CounterContext } from '../context/CounterContext'

const ChangeCounter = () => {

  //Pegamos o valor atual que está no context e salvamos o estado dele.
  //Além disso, definimos o "alterador dele", que é o setCounter.
    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)} >Add value to Counter</button>
    </div>
  )
}

export default ChangeCounter