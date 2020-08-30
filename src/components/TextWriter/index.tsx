import React, { useState } from 'react'
import AWS from 'aws-sdk'
import awsmobile from '../../aws-exports'
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
  region: awsmobile.aws_cognito_region,
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_KEY,
})

const sns = new AWS.SNS()

export default function TextWriter() {
  const [text, captureText] = useState<string>('')
  const classes = useStyles()

  const captureTextMessage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    captureText(event.currentTarget.value)
  }

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    const params = {
      Message: text,
      Subject: 'Text Alert',
      TopicArn: process.env.REACT_APP_TOPIC_ARN,
    }
    sns.publish(params, function (err, data) {
      if (err) console.log(err, err.stack)
      // an error occurred
      else console.log(data) // successful response
    })

    console.log('message to be sent: ', text)
  }

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete='off'
      onSubmit={onSubmit}>
      <TextField
        id='standard-basic'
        label='Text Generator'
        onChange={captureTextMessage}
      />
      <Btn label='Send Message' />
    </form>
  )
}
