import { useState } from "react"
import { usePrevius } from "../hooks/usePrevious"

const HookCustom = () => {

  const [number, setNumber] = useState(0)
  const previusValue = usePrevius(number)

  return (
    <div>
        <h2>customHook</h2>
        <p>Atual: {number}</p>
        <p>Anterior: {previusValue}</p>
        <button onClick={() => setNumber(Math.random())}>Alterar!</button>
        <hr />
    </div>
  )
}

export default HookCustom