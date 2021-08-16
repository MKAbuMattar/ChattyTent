import React, { Fragment } from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { Redirect } from 'react-router-dom'

import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'


const App = () => {
  return (
    <Fragment>
      <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
        <Route path="/*" >
          <Redirect to="/" />
        </Route>
      </Router>
    </Fragment>
  )
}

export default App
