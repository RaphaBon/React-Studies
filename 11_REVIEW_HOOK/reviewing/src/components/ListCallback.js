import { useEffect, useState } from "react"


const ListCallback = ({getItems}) => {

  const [product, setProduct] = useState([])
  
  useEffect(() => {
    setProduct(getItems())
    
  }, [getItems])

  console.log(product)

  return (
    <div>
        <p>{product && product.map((product) => (
            <li>{product}</li>
        ))}</p>
    </div>
  )
}

export default ListCallback