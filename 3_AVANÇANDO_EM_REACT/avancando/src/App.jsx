// Import dos components
import LembrandoReact from './components/LembrandoReact' 
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import ListRenderImage from './components/ListRenderImage'
import Fragments from './components/Fragments'
import ChildrenProps from './components/ChildrenProps'
import ExecutionFunction from './components/ExecutionFunction'
import Message from './components/Message'

// Import da imagem.
import City from './assets/city.jpg'


// Import hook
import { useState } from 'react'
import ChangeMessageState from './components/ChangeMessageState'




function App() {

  {/* Função passada como props  */}
  function showMessage(){
      console.log("Message")
  }

  const [message, setMessage] = useState()

  const handleMessage = (msg) => {
      setMessage(msg)
  }

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
          {/* HOOK useState */}
          <ManageData/>
          {/* Renderizando lista com 
            {list.map((item) => 
              {
                <p key = {item.id}> Olá {item} </p> 
              })} */}

          <ListRender/>

          <ListRenderImage/>
          {/* If Else em react, sendo {condicao ? () : ()} */}
          <ConditionalRender/>

          {/* Agora, esse componente tem acesso a uma props com o valor de "Raphael"*/}
          <ShowUserName  name = "Raphael"/>

          {/* Desestruturando uma props*/}
          <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>

          {/* Reaproveitando componente */}
          <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
          <CarDetails brand="Fiat" color="Preto" km={63000} newCar={false}/>

          {/* Fragments, ou seja, elemento filho tem 2 pais */}
          <Fragments />

          {/* ChildrenProps */}
          <ChildrenProps>
              <h1>Olá Childrens!</h1>
          </ChildrenProps>

          {/* FUnção como props (essa função está antes do retorno App() )*/}
          <ExecutionFunction myFunction={showMessage}/>

          {/* StateLift */}
          <Message msg={message}/>
          <ChangeMessageState handleMessage={handleMessage} />
    </div>

  )  
}

export default App
