import { useContext } from "react";

import { EmailContext } from '../context/EmailContext'

const ChangeEmail = () => {

  const {email, setEmail} = useContext(EmailContext)

  const handleSubmit = (e) => {
     e.preventDefault()

  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="submit" value="Cadastrar" />
        </form>
    </div>
  )
}

export default ChangeEmail
