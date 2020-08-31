import React, { useState } from 'react'
import AWS from 'aws-sdk'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import Btn from 'components/reusables/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_KEY,
})

const sns = new AWS.SNS()

export default function TextWriter() {
  const [text, setText] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const classes = useStyles()

  const captureTextMessage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.currentTarget.value)
  }

  const setEmailAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.currentTarget.value)
  }

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    const params = {
      Message: `message: ${text}, email: ${email} `,
      Subject: 'Text Alert',
      TopicArn: process.env.REACT_APP_TOPIC_ARN,
    }
    sns.publish(params, function (err, data) {
      if (err) console.log(err, err.stack)
      // an error occurred
      else console.log(data) // successful response
    })

    setText('')
    setEmail('')
  }

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={onSubmit}>
      <TextField
        id='standard-basic'
        label='Text Message'
        onChange={captureTextMessage}
        value={text}
      />
      <TextField
        id='standard-basic'
        label='Email'
        onChange={setEmailAddress}
        value={email}
      />
      <Btn label='Send Message' onClick={onSubmit} />
    </form>
  )
}
