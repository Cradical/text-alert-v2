import React from 'react'
import Typography from '@material-ui/core/Typography'

import MainPage from 'views/MainPage'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Typography variant='h2'>Welcome to Text Alert</Typography>
      </header>
      <MainPage />
    </div>
  )
}

export default App
