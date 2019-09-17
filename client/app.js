import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Meenu from './components/menu'
import {Container} from 'semantic-ui-react'
import Home from './components/home'
import About from './components/about'
import Background from './components/background'

const App = () => {
  return (
    <div className="siteContainer">
      <Routes />

      <Meenu />
    </div>
  )
}

export default App
