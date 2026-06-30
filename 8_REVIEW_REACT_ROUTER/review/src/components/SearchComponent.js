//Imports
import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"

const SearchComponent = () => {
  
  const navigate = useNavigate()
  const [query, setQuery] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search?q=${query}`)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <input type="submit" value="Buscar" />
        </form>
    </div>
  )
}

export default SearchComponent