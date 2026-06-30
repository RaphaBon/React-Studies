//Imports
import { Link } from "react-router-dom"
import { useFetch } from '../hooks/useFetch'

//CSS
import './Home.css'

const Home = () => {

  const url = "http://localhost:3000/products"
  const {data:products, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Produtos</h1>

        {loading && <p>Carregando ...</p> }
        {error && <p>Houve algum erro ao carregar os dados!</p>}
        <div className="products">
          {products && products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              {/* Link dinâmico */}
              <Link to={`/products/${product.id}`}>Mais Detalhes Sobre o Produto!</Link>
            </li>
          ))}
        </div>
    </div>
  )
}

export default Home