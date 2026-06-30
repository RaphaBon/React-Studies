//Aula 4 -> Hook para trazer o id da URL
import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {

  //Aula 4 -> Pegamos o ID da URL
  const { id } = useParams()

  //Aula 5 -> Carregamentos de dados individual
  const url = `http://localhost:3000/products/${id}`
  const {data: product, loading, error} = useFetch(url)

  return (
    <>
      {error && <p>Ocorreu um erro!</p> }
      {loading && <p>Carregando ... </p> }
      {product && (
        <div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            {/* Aula 6 -> Nested Route */}
            <Link to={`/products/${product.id}/info`} >Mais Informações!</Link>
        </div>
      )}
    </>
  )
}

export default Product