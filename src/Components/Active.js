import React, {useContext, useEffect} from 'react'
import '../App.css'
import {StateContext} from './StateContext'

const Active = () => {
  const {todos, activeList, setActiveList, toggleTodo, deleteBtn} = useContext(StateContext)

  useEffect(() => {
    setActiveList(todos.filter(todo => !todo.val))
  }, [todos])

  return (
    <div>
      <ul>
        {activeList.map((todo, idx) => (
          <li
            key={idx}
            style={todo.val ? {textDecorationLine: 'line-through'} : {textDecorationLine: 'none'}}
          >
            <div className="pretty p-default p-round">
              {' '}
              <input type="checkbox" onClick={() => toggleTodo(idx)} />
              <div className="state">
                <label></label>
              </div>
            </div>

            <p> {todo.input}</p>
            <div>
              <button className="deleteBtn" onClick={() => deleteBtn(idx)}>
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Active
