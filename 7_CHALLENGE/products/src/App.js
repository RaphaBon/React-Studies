import './App.css';

import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"

function App() {

  const [products, setProducts] = useState([])

  //UX
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")


  //GET nos products
  useEffect(() => {
    const getProducts = async() => {
      setLoading(true)

      const res = await fetch(url)
      const json = await res.json()
      setProducts(json)

      setLoading(false)
    }

    getProducts()
  }, [])

  //Delete product
  const deleteProduct = async(id) => {
    
  const confirmDelete = window.confirm("Tem certeza que deseja excluir este produto?")
  if(!confirmDelete) return

  try {
    await fetch(`${url}/${id}`, {method: "DELETE"})
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id))
  } catch (error) {
     setError("Erro ao excluir o produto!!")
  }
  }

  //Add via POST
  const handleSubmit = async(e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    //Start loading, POST on API, finish loading
    try {
      setLoading(true)     
      const res = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify(product)
      })
    setLoading(false)

    //Re-renderização
    const addedProduct = await res.json()
    setProducts((prevProducts) => [...prevProducts, addedProduct])

    } catch (error) {
      setError("Erro ao inserir o usuário!")
    }

    //Clear input
    setName("")
    setPrice("")
  }   
  
  return (
    <div className="App">
        <h1>Charlie Charlie, are you here ? </h1>

        {/* Lista de produtos do GET */}
        <ul>
          {loading && <p>Carregando ...</p>}
          {!loading && 
            (products.map(product => (
            <li key={product.id}>
              <span>Produto: {product.name}</span>{" "}
              <span>Preço: {product.price}</span>
              <button type="button" onClick={() => deleteProduct(product.id)}>
                Excluir Produto
              </button>
            </li>
            )))
          }
        </ul>

        {/* Formulário de POST */}
        <form onSubmit={handleSubmit}>
          <label>
            Produto: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
          </label>
          <label>
            Price: <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required/>
          </label>
          {loading && <input type="submit" disabled value="Aguarde!"/> }
          {!loading && <input type="submit" value="Adicionar Produto" /> }
        </form>

    </div>
  );
}

export default App;
