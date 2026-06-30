import { Link } from "react-router-dom"
import '../pages/Home.css'

//Aula 3 -> Importando o hook de carregamento de dados
import { useFetch } from '../hooks/useFetch'

const Home = () => {
  //Aula 3 -> Refazendo o carregamento de dados:
  const url = "http://localhost:3000/products"
  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}

      {/* Aula 3 -> Refazendo a mostragem dos itens */}
      <ul className="products">
         {items && items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>

            {/* Aula 4 -> Rota dinamica */}
            <Link to={`/products/${item.id}`} > Detalhes </Link>

          </li>
         ))}
      </ul>

    </div>
  )
}

export default Home