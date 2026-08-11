import { useState, useEffect } from 'react'

const HookUseEffect = () => {

  //1 -> useEffect sem dependencias.

  useEffect(() => {
    console.log("Estou sendo executado!")
  })

  const [number, setNumber] = useState(1)

  const changeNumber = () => {
    setNumber(number + 1)
  }

  // 2 -> useEffect com array de dependencias vazio.
  useEffect(() => {
    console.log("Serei executado apenas uma vez!")
  },[])

  // 3 -> useEffect com valores no array de dependencias.
  const [value, setValue] = useState(0)

  useEffect(() => {
    if(value > 0){
      console.log("Sou executado apenas quando o value é alterado!")
    }
  }, [value])

  // 4 -> CleanUP do useEffect()
  useEffect(() => {

    const timer = setTimeout(() => {
        console.log("Hello World!")

        setValue(value + 1)
    }, 2000)

    return () => clearTimeout(timer)
  }, [value])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeNumber}>Executar!</button>
        <p>Value: {value}</p>
        <button onClick={() => setValue(value + 1)} >Mudar Value!</button>
        <hr />
    </div>
  )
}

export default HookUseEffect