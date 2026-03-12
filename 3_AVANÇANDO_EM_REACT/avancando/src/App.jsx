// Import dos components
import LembrandoReact from './components/LembrandoReact' 
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

// Import da imagem.
import City from './assets/city.jpg'
import ListRenderImage from './components/ListRenderImage'



function App() {
  return(
    <div className='App'>
        <div>
          <LembrandoReact/>
        </div>

        <div>
          {/*Adicionando uma imagem que está na pasta public */}
          <img src="/img1.jpg" alt="Paisagem"/>
        </div>

        <div>
          {/*Adicionando uma imagem que está na pasta assest */}
          <img src={City} alt="Cidade" />
        </div>

          <ManageData/>

          <ListRender/>

          <ListRenderImage/>

          <ConditionalRender/>

          {/* Agora, esse componente tem acesso a uma props com o valor de "Raphael"*/}
          <ShowUserName  name = "Raphael"/>

          {/* Desestruturando uma props*/}
          <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>

          {/* Reaproveitando componente */}
          <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
          <CarDetails brand="Fiat" color="Preto" km={63000} newCar={false}/>
    </div>

  )  
}

export default App
