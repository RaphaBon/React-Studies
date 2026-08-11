import { useContext } from "react"
import { Link } from "react-router-dom"
import { UseContext } from "../components/HookUseContext"

const Home = () => {

  const {alterValue} = useContext(UseContext)

  return (
    <div>
        <h1>Deseja ver sobre os hooks do react ? Clique no botão abaixo:</h1>
        <button onClick={alterValue}>Alterar valor do context!</button>
        <Link to="/hooks">HOOKS</Link>
    </div>
  )
}

export default Home