import './App.css';
import {useState, useEffect} from 'react';

// Aula 6 -> Custom Hook
import {useFetch} from './hooks/useFetch'

const url = "http://localhost:3000/products"

function App() {
  // Aula 3 -> Criando states para salvar os dados e alocar os dados 
  const [products, setProducts] = useState([]);

  // Aula 6 -> Pegamos os dados pelo hook e renomea para "items"
  const {data: items, httpConfig, loading, error} = useFetch(url)
 
  // Foi tudo comentado pois estamos usando o hook da aula 6 para fazer isto.
  //  {/* Aula 3 -> Resgatar os dados*/}
  //   {/* 
  //     1- > Salvamos a resposta vinda da Fetch API da nossa URL, 
  //     2 -> Como a resposta vem em JSON, transformamos em OBJETO JS
  //     3 -> Salvamos no nosso useState
  //     4 -> Passamos o array de dependencias ( ainda vazio)
  //   */}
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //   }
    
  //   fetchData();
  // }, [])

  // Aula 4 -> Resgatar dados do formulário 
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // Aula 4 -> Enviar dados para API e atualizar lista de produtos 
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }
    // Tudo substituído pelo hook
    // {/* Aula 4 ->  Passamos o METHOD (POST), o HEADER (informações adicionais) e o BODY ( dados em JSON) */}
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // {/* Aula 5 -> Carregamento dinamico dos dados 
    //   1 -> Como os dados vem em JSON, transformamos em um objeto JS
    //   2 -> Setamos os produtos com: lista dos produtos + produtos que foram adicionados 
    //   3 -> Limpamos os inputs 
    // */}
    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    // 7 -> Refatorando o post:
    httpConfig(product, "POST")


    setName("")
    setPrice("")
  }
  
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>

      {/* Aula 8 - Loading */}
      {loading && <p>Carregando Dados...</p>}

      {/* Aula 10 -> Exibindo o erro  */}
      {error && <p>{error}</p>}
      {!error && 
        (<ul>
                {/* Aula 3 -> Exibir cada produto vindo da API */}
        {/* Aula 6 -> Como agora estamos usando os dados do nosso hook, o map é no array que veio de lá
        , porém, ele inicialmente vem como null, então fazemos um IF para só usar map se tiver dados */}
          {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}</li>
        ))}
        </ul>)
      }

      {/* Aula 4 -> Formulário para enviar dados para API */}
      <div className="add-product">
        {/* Cria o formulário, onde ao enviar chama a função handleSubmit criada acima */}
        <form onSubmit={handleSubmit}>
          {/* Criamos cada label, e dentro do label, o input, para estar associado.
            Onde, dentro de cada input, associamos ao state com o value*/}
          <label>
            Nome:
              <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Price:
              <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* Aula 9 -> Desabilitar o botão enquanto está carregando */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>

    </div>
  );
}

export default App;
