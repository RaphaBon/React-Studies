import { useRef } from "react"

import ChildImperativeHook from "./ChildImperativeHook"

const HookUseImperativeHandle = () => {

  const childRef = useRef()

  return (
    <div>
        <h2>useImperativeHandle()</h2>
        <ChildImperativeHook ref={childRef}/>
        <button onClick={() => childRef.current.zerar()} >Zerar</button>
        <hr />
    </div>
  )
}

export default HookUseImperativeHandle