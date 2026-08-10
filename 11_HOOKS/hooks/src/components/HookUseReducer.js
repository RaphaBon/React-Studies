import { useReducer, useState } from "react"

const HookUseReducer = () => {
  // 1 -> Começando com o useReducer()
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state)
  })

  //2 -> Avançando com useReducer()
  const initialTask = [
    {id: 1, text: "Aprender useState"},
    {id: 2, text: "Aprender useReducer"},
    {id: 3, text: "Entender qual a diferença"}
  ]

  const taskReducer = (state, action) => {
    switch(action.type){
        case "ADD": 
            const newTask = {
                id: Math.random(),
                text: taskText
            }

            setTaskText("")

            return [...state, newTask]
        case "DELETE":
            return state.filter((task) => task.id != action.id)
        default:
            return state
    }
  }

  const [taskText, setTaskText] = useState("")
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTask)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatchTasks({type: "ADD"})
  }

  const removeTask = (id) => {
    dispatchTasks({type: "DELETE", id: id})
  }

  return (
    <div>
        <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar</button>
            <h3>Tarefas:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
                <button type="submit">Adicionar task</button>
            </form>

            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
            ))}
        <hr/>

    </div>
  )
}

export default HookUseReducer