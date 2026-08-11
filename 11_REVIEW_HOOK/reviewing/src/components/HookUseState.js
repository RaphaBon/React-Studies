import { useState } from "react"

const HookUseState = () => {

  // Setamos os estados (int, string, array) e manipulamos como quisermos

  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newName = name
    setList([...list, newName])

    setCount(count + 1)
    setName("")
  }

  return (
    <div>
        <h2>useState()</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <button type="submit">Adicionar nome à lista!</button>
        </form>

        <p>Quantidade de nomes: {count}</p>
        <strong>Nomes: {list.map((item) => ( <span>{item} </span> ))}</strong>   

        <hr />
    </div>
  )
}

export default HookUseState