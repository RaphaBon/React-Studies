import { useState, useMemo, useEffect } from "react"

const HookUseMemo = ({produtos}) => {

  const [reloader, setReloader] = useState(0)

// If done without useMemo(), every page reload, this function would execute even if no values changed
//   const [produtosCaro, setProdutosCaro] = useState([])
//   
//   useEffect(() => {
//      setProdutosCaro(produtos.filter((p) => p.preco > 100))
//   }, [produtos])

  const produtosCaro = useMemo(() => {
        console.log("Filtrando produto ...")
        return produtos.filter((p) => p.preco > 100)
  }, [produtos])
   

  return (
    <div>
        <h2>useMemo()</h2>
        <button onClick={() => setReloader(reloader + 1)} >Renderizar!</button>
        <p>{reloader}</p>
        <ul>
            {produtosCaro && produtosCaro.map((p) => (
                <li key={p.id}>{p.nome}</li>
            ))}
        </ul>
        <hr />
    </div>
  )
}

export default HookUseMemo