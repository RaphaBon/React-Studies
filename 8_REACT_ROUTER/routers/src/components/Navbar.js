import './Navbar.css'

//Aula 2 -> Importando o Link para criar nossa navbar
//import { Link } from 'react-router-dom' 

//Aula 8 -> Importamos o NavLink, pois a partir de agora vamos utilizar o isActive.
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      {/* Aula 2:
      <Link to="/">Home</Link> 
      <Link to="/About">About</Link>
      */}
      {/* Aula 8: O que está dentro do className, é para pegar o valor do atributo isActive e, por meio dele, realizar a troca do estilo*/}
      <NavLink to="/" className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")} >Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Navbar