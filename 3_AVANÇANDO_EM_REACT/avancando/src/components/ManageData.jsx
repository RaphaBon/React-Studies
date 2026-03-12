// Para resolver o problema da váriavel nao atualizar, importamos o hook useState
import { useState } from "react"

const ManageData = () => {

    {/* Para exemplificarmos o por que não utilizamos váriaveis e sim hooks, criamos essa váriavel com o valor 10*/}
    let someData = 10

    // Criamos a váriavel e uma função para ela e conseguimos passar um valor para ser guardar em ambas
    const [number, setNumber] = useState(15)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            {/*Aqui, quando clicamos, era para a variável mudar para 15, mas isso não acontece */}
            <button onClick={() => (someData = 15)}>Mudar Váriavel</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            {/*Aqui, como estamos usando o hook, ao apertar o botao o valor de "number" é alterado para 25 por meio da
                função atribuída a ela*/}
            <button onClick={() => setNumber(25)}>Mudar Váriavel</button>
        </div>
    </div>
  )
}

export default ManageData