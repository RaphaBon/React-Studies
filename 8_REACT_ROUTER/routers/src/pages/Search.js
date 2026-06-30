import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
  //Pegamos o que veio como parametro lá do navigate
  const [searchParams] = useSearchParams()
  //Criamos uma nova URL com esse parametro
  const url = `http://localhost:3000/products?${searchParams}`

  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Resultados diponíveis:</h1>
        <ul className="products">
         {items && items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
          </li>
         ))}
      </ul>
    </div>
    
  )
}

export default Search