import { useEffect, useState } from "react"
import MyComponent from "./MyComponent"
import ListRow from "./LIstRow"

function App() {
  const [todos, setTodos] = useState([])

  const [text, setText] = useState("")

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const add = () => {
    setTodos((t) => [...t, text])
    setText("")
  }

  const handleDelete = (indexToRemove) => {
    setTodos(t => todos.filter((_, index) => index !== indexToRemove));
  }

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <div className="container">
      <h1>To Do List</h1>
      <input value={text} type="text" onChange={handleChange} />
      <button onClick={add}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
           <button onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
