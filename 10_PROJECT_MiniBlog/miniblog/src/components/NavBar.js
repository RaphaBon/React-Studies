import { NavLink } from "react-router-dom";

//Css
import styles from './NavBar.module.css'

//Context
import { useAuthValue } from "../context/AuthContext";

//Hook
import { useAuthentication } from "../hooks/useAuthentication";

const NavBar = () => {
  const {user} = useAuthValue()
  const {logOut} = useAuthentication()

  return (
    <nav className={styles.navbar} >
      {/* Slogan do Projeto */}
      <NavLink to="/" className={styles.brand} > Mini <span>BLog</span> </NavLink>

      <ul className={styles.links_list} >
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')} > Home </NavLink>
        </li> 
  
        {/* Logged out */}
        {!user && (
          <>
            <li>
              <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : '')} > Entrar </NavLink>
            </li>

            <li>
              <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : '')} > Cadastrar </NavLink>
            </li>
          </>
        )}

        {/* Logged in */}
        {user && (
          <>
          <li>
            <NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active : '')}  > Dashboard </NavLink>
          </li>

          <li>
            <NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active : '')} > Criar Post </NavLink>
          </li>
          </>
        )}

        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')} > Sobre </NavLink>
        </li>

        {user && (
           <li>
            <button onClick={logOut} > Sair </button>
          </li>
        )}

      </ul>

    </nav>
  )
}

export default NavBar