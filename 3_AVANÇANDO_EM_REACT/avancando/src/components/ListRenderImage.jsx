import { useState } from 'react'
import img1 from '../assets/city.jpg'
import img2 from '../assets/img1.jpg'

const ListRenderImage = () => {

  const [image] = useState([
    { id: 1, src: img1 },
    { id: 2, src: img2 }
  ])

  return (
    <div>
      <ul>
        {image.map((img) => (
          <li key={img.id}>
            <img src={img.src} alt="" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListRenderImage