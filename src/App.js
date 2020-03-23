import React from 'react'
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom'
import './App.css'
import Active from './Components/Active'
import Completed from './Components/Completed'
import All from './Components/All'

import {StateProvider} from './Components/StateContext'

function App() {
  return (
    <div className="app">
      <StateProvider>
        <BrowserRouter>
          <Route path="/" exact component={All} />
          <Switch>
            <Route path="/Active" exact component={Active} />
            <Route path="/Completed" exact component={Completed} />
          </Switch>
          <NavLink
            exact
            activeStyle={{border: '2px solid rgba(175, 47, 47, 0.2)'}}
            className="navLinks"
            to="/"
          >
            All
          </NavLink>
          <NavLink
            exact
            activeStyle={{border: '2px solid rgba(175, 47, 47, 0.2)'}}
            className="navLinks"
            to="/Active"
          >
            Active
          </NavLink>
          <NavLink
            exact
            activeStyle={{border: '2px solid rgba(175, 47, 47, 0.2)'}}
            className="navLinks"
            to="/Completed"
          >
            Completed
          </NavLink>
        </BrowserRouter>
      </StateProvider>
    </div>
  )
}

export default App
