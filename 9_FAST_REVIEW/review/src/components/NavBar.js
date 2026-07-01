import { NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <NavLink to="/" >HOME</NavLink>
        <NavLink to="/about" >ABOUT</NavLink>
        <NavLink to="/register" >REGISTER</NavLink>
    </div>
  )
}

export default NavBar