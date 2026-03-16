import { useState } from 'react'
import './MyForm.module.css'

const MyForm = ({ user }) => {

    // 3- Gerenciamento de dados     //6 (os dados passados no useStates são os que vieram da props)
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState()

    // Usando o e.preventDefault() evitamos que a página recarregue depois do envio
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando o formulário!")

        console.log(name)
        console.log(email)
        console.log(bio)

        setName("")
        setEmail("")
        setBio("")
    }

    return (
        <div>

            {/* 5 - Envio do form (função a ser chamada após o submit) */}
            {/* 1- Criação do form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    {/* Passamos o valor do useState em value*/}
                    <input type="text" name="name" placeholder='Digite o seu nome' onChange={(e) => setName(e.target.value)} value={name} />
                </div>

                {/* 2- Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    {/* 4- Função Inline */}
                    <input type="email" name="email" placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>

                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm