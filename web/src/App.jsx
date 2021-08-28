import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StatesList from './view/StatesList'
import StateDetails from './view/StateDetails'

export default function App () {
  return (
    <Suspense fallback={<p>Page is loading...</p>}>
      <Router>
        <Switch>
          <Route exact path='/' render={() => <StatesList />} />
          <Route exact path='/Bundesland/:url' render={() => <StateDetails />} />
        </Switch>
      </Router>
    </Suspense>
  )
}
