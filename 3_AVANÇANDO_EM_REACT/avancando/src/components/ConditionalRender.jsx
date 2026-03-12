import { useState } from 'react'

const ConditionalRender = () => {

    {/* Apena define o estado de X para verificar o IF ELSE */}
    const [x] = useState(true)

    const [name, setName] = useState("Julio")

  return (
    <div>
        <h1>Isso será exibido ?</h1>

        {x == true ? <p>X é true</p> : <p>X é falso</p>}

        <h1>IF ternário</h1>

        {name === "Raphael" ? (
            <div>
                <p>O nome é Raphael</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}

        <button onClick={() => setName("Raphael")}>Clique para trocar o nome!</button>
    </div>
  )
}

export default ConditionalRender