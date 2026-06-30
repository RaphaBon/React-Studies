//Imports
import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
  
  const [searchParams] = useSearchParams()
  const url = `http://localhost:3000/products?${searchParams}`

  const {data: products, loading, error} = useFetch(url)

  return (
    <div>
        {loading && <p>Carregando ...</p> }
        {error && <p>Erro ao carregar os produtos!</p> }
        {products && products.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>R$: {product.price}</p>
          </li>
         ))}
    </div>
  )
}

export default Search