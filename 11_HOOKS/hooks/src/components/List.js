import {useState, useEffect} from 'react'

const List = ({getItems}) => {
  
  const [myItems, setMyItems] = useState([])

  useEffect(() => {
    console.log("Buscando itens do db ...")

    setMyItems(getItems)
  }, [getItems])

  return (
    <div>
        {myItems.map((myItem) => (
            <p key={myItem}>{myItem}</p>
        ))}
    </div>
  )
}

export default List