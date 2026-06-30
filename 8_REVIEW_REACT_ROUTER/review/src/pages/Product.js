//Imports
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {

  //Pegando o ID da url
  const {id} = useParams()

  //Criando a URL para resgatar dados individuais e fazendo o GET nela.
  const url = `http://localhost:3000/products/${id}`
  const {data: product, loading, error} = useFetch(url)

  return (
    <>
        {/* Tratamento REQ */}
        {loading && <p>Carregando...</p> }
        {error && <p>Erro ao resgatar os dados!</p> }
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
            </div>
        )}
    </>
  )
}

export default Product