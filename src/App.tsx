import React, { useEffect, useState } from 'react'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

import MainPage from 'views/MainPage'
import ManagedAuthenticator from 'components/ManagedAuthenticator'

import './App.css'

function App() {
  const [authState, setAuthState] = useState<AuthState>()
  const [user, setUser] = useState<object | undefined>()

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to Text Alert</h1>
      </header>
      <MainPage />
      <AmplifySignOut />
    </div>
  ) : (
    <ManagedAuthenticator />
  )
}

export default App
