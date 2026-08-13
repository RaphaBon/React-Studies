import {useRef, useState, useEffect} from 'react'

const HookUseRef = () => {

  const [number, setNumber] = useState(0)
  const count = useRef(0)

  useEffect(() => {
    console.log("Renderizei!") 
  })

  const [name, setName] = useState("")
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setName("")
    inputRef.current.focus()
  }


  return (
    <div>
        <h2>useRef()</h2>
        <button onClick={() => setNumber(number + 1)} >Alterar Number ( vai renderizar o componente )</button>
        <button onClick={() => (count.current = (count.current + 1))}>Alterar Count (não vai renderizar )</button>
        <p>Number: {number}</p>
        <p>Count: {count.current}</p>
        <strong>Teste o useRef manipulando DOM:</strong>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={inputRef}  />
            <input type="submit" value="Focar no campo de texto!" />
        </form>
        <hr />
    </div>
  )
}

export default HookUseRef