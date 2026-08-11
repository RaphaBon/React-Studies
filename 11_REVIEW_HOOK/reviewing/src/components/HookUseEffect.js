import { useEffect, useState } from "react"

const HookUseEffect = () => {

  useEffect(() => {
    console.log("olá")
  })    

  useEffect(() => {
    console.log("Sou executado só 1 vez!")
  }, [])


  const [number, setNumber] = useState(0)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if(value > 0){
        console.log("Sou executado apenas quando o value é alterado!")
    }
  }, [value])

  return (
    <div>
        <h2>useEffect()</h2>
        <button onClick={() => setNumber(number + 1)}>Acionar o useEffect sem dependencias!</button>
        <p>O useEffect com dependencias vazia é executado apenas 1 vez, logo ao carregar a página!</p>
        <button onClick={() => setValue(value + 1)} >Acionar useEffect com valor como dependencia!</button>
        <p>{value}</p>
        <hr />
    </div>
  )
}

export default HookUseEffect