import { NavLink } from "react-router-dom"

//Import
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <NavLink to="/" >HOME</NavLink>
        <NavLink to="/about" >ABOUT</NavLink>
    </div>
  )
}

export default NavBar