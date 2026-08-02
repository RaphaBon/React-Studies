//CSS
import styles from './Register.module.css' 

//Hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'


const Register = () => {
  //States
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  //Imports from hook
  const {createUser, error: authError, loading} = useAuthentication()
 
  const handleSubmit = async(e) => {
    e.preventDefault()
    setError("")

    //User
    const user = {
        displayName,
        email,
        password
    }

    //Password validation
    if(password !== confirmPassword){
        setError("As senhas precisam ser iguais!")
        return
    }

    //Take res from hook
    const res = await createUser(user)

    setDisplayName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  useEffect(() => {

    if(authError){
      setError(authError)
    }

  }, [authError])

  return (
    <div className={styles.register} >
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias!</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name="displayName" required placeholder="Nome Completo"
                  value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
            </label>
            <label>
                <span>Email:</span>
                <input type="email" name="email" required placeholder="Digite seu Email" 
                  value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="password" required placeholder="Digite a Senha" 
                  value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
                <span>Confirme a senha:</span>
                <input type="password" name="confirmPassword" required placeholder="Confirme sua Senha"
                 value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
            {/* Handling Loading */}            
            {!loading && <button className="btn">Cadastrar</button>}
            {loading && <button className="btn" disabled>Aguarde ...</button> }

            {/* Handling Error */}
            {error && <p className='error'>{error}</p> }
        </form>

    </div>

    

  )
}

export default Register