//NavLink
import { NavLink } from 'react-router-dom'

//CSS
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <NavLink to="/" > HOME </NavLink>
        <NavLink to="/data"> DATA </NavLink>
        <NavLink to="/details"> DETAILS </NavLink>
    </div>
  )
}

export default NavBar