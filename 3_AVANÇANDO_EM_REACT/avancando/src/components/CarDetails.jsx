
const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro:</h2>

        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        </ul>

        {newCar === true ? 
        (
            <div><p>Este carro é novo</p></div>
        ) : 
        (
            <div>
                <p>Este carro é usado</p>
            </div>
        )
        }

    </div>
  )
}

export default CarDetails