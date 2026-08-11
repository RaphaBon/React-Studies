import { Link } from "react-router-dom"

import HookUseState from '../components/HookUseState'
import HookUseReducer from "../components/HookUseReducer"
import HookUseEffect from "../components/HookUseEffect"

import { useContext } from "react"
import { UseContext } from "../components/HookUseContext"

const Hooks = () => {
  
  const {value} = useContext(UseContext)

  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        <strong>Valor do context: {value}</strong>
        <footer>
            <br />
            <Link to="/">VOLAR PARA HOME</Link>
        </footer>
    </div>
  )
}

export default Hooks