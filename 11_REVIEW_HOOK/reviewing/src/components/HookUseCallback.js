import {  useState} from "react"
import ListCallback from "./ListCallback"

const HookUseCallback = () => {  

    const [value, setValue] = useState(0)

  function getProducts(){
    return ["a", "b", "c"]
  }

  return (
    <div>
        <h2>useCallBack()</h2>
        <ListCallback getItems={getProducts} />
        <button onClick={() => setValue(value + 1)} >Renderizar!</button>
        <hr />
    </div>
  )
}

export default HookUseCallback