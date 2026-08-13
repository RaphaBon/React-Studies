import { Link } from "react-router-dom"

import HookUseState from '../components/HookUseState'
import HookUseReducer from "../components/HookUseReducer"
import HookUseEffect from "../components/HookUseEffect"
import HookUseRef from "../components/HookUseRef"
import HookUseCallback from "../components/HookUseCallback"
import HookUseMemo from "../components/HookUseMemo"

import { useContext } from "react"
import { UseContext } from "../components/HookUseContext"
import HookUseImperativeHandle from "../components/HookUseImperativeHandle"


const Hooks = () => {
  
  const {value} = useContext(UseContext)

  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        <strong>Valor do context: {value}</strong>
        <hr />
        <HookUseRef />
        <HookUseCallback />
        <HookUseMemo />
        <HookUseImperativeHandle />

        <footer>
            <br />
            <Link to="/">VOLAR PARA HOME</Link>
        </footer>
        
    </div>
  )
}

export default Hooks