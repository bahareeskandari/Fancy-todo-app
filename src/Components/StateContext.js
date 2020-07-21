import React, {createContext, useState} from 'react'
import '../App.css'

export const StateContext = createContext()

export const StateProvider = props => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  const [completedList, setCompletedList] = useState([])
  const [activeList, setActiveList] = useState([])

  const addToList = e => {
    e.preventDefault()
    setTodos([...todos, {input: inputValue, val: false}])
    setInputValue('')
  }
  const toggleTodo = idx => {
    todos[idx].val = !todos[idx].val
    setTodos([...todos])
  }
  const deleteBtn = idx => {
    setTodos(todos.filter(todo => todo !== todos[idx]))
  }
  const clearCompleted = () => {
    console.log("HH")
    console.log(todos)
    setTodos([])
  }

  return (
    <React.Fragment>
      <StateContext.Provider
        value={{
          inputValue,
          setInputValue,
          todos,
          setTodos,
          completedList,
          setCompletedList,
          activeList,
          setActiveList,
          addToList,
          toggleTodo,
          deleteBtn
        }}
      >
        <div className="h1">
          <h1>One of my very first todo-apps 😉</h1>
        </div>{' '}
        <form onSubmit={addToList}>
          <input
            className="new-todo"
            type="text"
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <input type="submit" hidden />
        </form>
        {props.children}
        <p id="activeListLength">{activeList.length} items left</p>
        <p>
          <button onClick={() => clearCompleted()}>Clear all</button>
        </p>
      </StateContext.Provider>
    </React.Fragment>
  )
}
