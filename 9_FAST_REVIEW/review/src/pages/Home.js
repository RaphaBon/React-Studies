import { useEmail } from '../hooks/useEmail'
import { useTheme } from '../hooks/useTheme'

const Home = () => {

  const {email} = useEmail()

  const {theme, dispatch} = useTheme()

  const setTheme = (theme) => {
    dispatch({type: theme})
  }

  return (
    <div style={{
            backgroundColor: theme === "black" ? "#121212" : "#ffffff",
            color: theme === "black" ? "#ffffff" : "#000000",
            minHeight: "100vh"
        }}>

        <h1>Estamos na HOME!</h1>
        <p>Voce está logado com o email: {email}</p>
        <button onClick={() => setTheme("BLACK")} >TEMA ESCURO</button>
        <button onClick={() => setTheme("WHITE")} >TEMA CLARO</button>        

    </div>
  )
}

export default Home