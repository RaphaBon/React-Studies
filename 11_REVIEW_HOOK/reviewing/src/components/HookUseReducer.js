import { useReducer, useState } from "react"

const HookUseReducer = () => {

  //Estado inicial / Função para alterar esse estado / Dispatch

  const initialState = (0)

  const alterValue = (state, action) => {
    switch(action.type){
      case "ADDITION":
        return state + 1
      case "SUBTRACTION": 
        return state - 1
      case "MULTIPLICATION":
        return state * action.time
      case "DIVISION":
        return state / 2
      default:
          return state
    }

  }
  
  const [times, setTimes] = useState(0)
  const [value, dispatch] = useReducer(alterValue, initialState)
  
  const addValue = () => {
    dispatch({type: "ADDITION"})
  }

  const subValue = () => {
    dispatch({type: "SUBTRACTION"})
  }

  const divValue = () => {
    dispatch({type: "DIVISION"})
  }

  const handleMultiValue = (e) => {
    e.preventDefault()
    dispatch({type: "MULTIPLICATION", time: times })
  }

  return (
    <div>
        <h2>useReducer()</h2>

        <button onClick={addValue}>Adicionar 1</button>
        <button onClick={subValue}>Subtrair 1</button>

        <form onSubmit={handleMultiValue} >
          <label>
            Multiplicar por: <input type="number" value={times} onChange={(e) => setTimes(e.target.value)}/>
          </label>
          <input type="submit" value="Multiplicar!" />
        </form>

        <button onClick={divValue}>Dividir por 2</button>

        <strong>Contador: {value}</strong>
        <hr />
    </div>
  )
}

export default HookUseReducer