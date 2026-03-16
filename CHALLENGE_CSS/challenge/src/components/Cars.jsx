import style from './Cars.module.css'

const Cars = ({ count, marca, modelo, ano, km }) => {

  return (
    <div className={style.car}>
        <h2>Carro {count}</h2>
        <p>Marca: {marca}</p>
        <p>Modelo: {modelo}</p>
        <p>Ano: {ano}</p>
        <p>Km: {km}</p>
    </div>
  )
}

export default Cars