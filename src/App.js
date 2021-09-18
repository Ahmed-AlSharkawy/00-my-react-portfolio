import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import { Home, SingleApp, AboutMe, Error } from './Pages'

// components
import { Header, Footer } from './components'

const App = () => {
  return (
    <Router>
      <main className='main-section'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/apps/:id'>
            <SingleApp />
          </Route>
          <Route path='/about'>
            <AboutMe />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </main>
    </Router>
  )
}

export default App
