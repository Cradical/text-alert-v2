import React from 'react'
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from '@aws-amplify/ui-react'

const ManagedAuthenicator: React.FC = () => {
  return (
    <AmplifyAuthenticator usernameAlias='email'>
      <AmplifySignUp
        headerText='Create Yourself a Text-Alert User'
        slot='sign-up'
        usernameAlias='email'
        formFields={[
          {
            type: 'email',
            label: 'Enter your email',
            placeholder: 'your_name@macrostax.com',
            required: true,
          },
          {
            type: 'password',
            label: 'Enter a simple password',
            placeholder: 'password',
            required: true,
          },
        ]}
      />
      <AmplifySignIn
        headerText='Sign Into Text-Alert to Send a SMS'
        slot='sign-in'
        usernameAlias='email'
      />
    </AmplifyAuthenticator>
  )
}

export default ManagedAuthenicator
