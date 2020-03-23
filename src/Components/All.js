import React, {useContext} from 'react'
import {StateContext} from './StateContext'
import '../App.css'

export const All = () => {
  const {todos, toggleTodo, deleteBtn} = useContext(StateContext)

  return (
    <ul>
      {todos.map((todo, idx) => (
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
  )
}
export default All
