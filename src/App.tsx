import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />
            }}
          ></Route>

          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Layout}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
