import { useState } from "react"

const HookUseState = () => {
  //1 - useState
  let userName = "João"
  const [name, setName] = useState("Raphael")
  
  const changeNames = () => {
    userName = "Joao Souze"
    setName("Raphael Alvares")
  }

  //2 - useState e input
  const [age, setAge] = useState(18)

  const handleSubmit = (e) => { 
    e.preventDefault()

    console.log(age)
    
    setAge("")
  }

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames} >Mudar Nomes</button>
      <hr />
      {/* 2 - useState + input */}
      <p>Digite sua idade: </p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos</p>
    </div>
  )
}

export default HookUseState