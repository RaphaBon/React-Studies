//Aula 9 -> Hook que, quando o usuário clicar em pesquisar, vai redirecionar ele para a página com o que
//  ele pesquisou como parametro da url
import { useNavigate } from "react-router-dom"

//Hook para pegar os dados
import { useState } from "react"

const SearchParams = () => {

  const navigate = useNavigate()
  const [query, setQuery] = useState()
  
  const handleSubmit = (e) => {
    //Para nao recarregar a página
    e.preventDefault()

    navigate(`/search?q=${query}`)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default SearchParams