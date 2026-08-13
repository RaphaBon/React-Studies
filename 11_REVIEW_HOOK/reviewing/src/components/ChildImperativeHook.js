import { useState, forwardRef , useImperativeHandle } from "react"

const ChildImperativeHook = forwardRef((props, ref) => {

  const [numero, setNumero] = useState(0)

  useImperativeHandle(ref, () => ({
    zerar: () => setNumero(0)
  }))

  return (
    <p>Número: {numero}</p>
  )
})

export default ChildImperativeHook