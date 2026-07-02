import { NavLink } from "react-router-dom";

//Css
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar} >
      {/* Slogan do Projeto */}
      <NavLink to="/" className={styles.brand} > Mini <span>BLog</span> </NavLink>

      <ul className={styles.links_list} >
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')} > HOME </NavLink>
        </li> 

        <li>
          <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : '')} > ENTRAR </NavLink>
        </li>

        <li>
          <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : '')} > CADASTRAR </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')} > ABOUT </NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default NavBar