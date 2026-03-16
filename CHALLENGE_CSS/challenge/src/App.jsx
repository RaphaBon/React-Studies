import { useState } from 'react'
import './App.css'

// Import components
import Cars from './components/Cars'

function App() {

  const [cars] = useState([
    {id: 1, marca: "Volks", modelo: "Jetta", ano: 2018, km: 52000},
    {id: 2, marca: "Honda", modelo: "Civic", ano: 2006, km: 157248},
    {id: 3, marca: "Toyota", modelo: "Corolla", ano: 2025, km: 0}
    ])

  let contador = 0

  return (
    <>
      <h1>Minha Garagem!</h1>

      {cars.map((car) => (
        contador++,
        <Cars 
          key={car.id}
          count={contador} 
          marca={car.marca} 
          modelo={car.modelo} 
          ano={car.ano} 
          km={car.km}/>
      ))}
    </>
  )
}

export default App
