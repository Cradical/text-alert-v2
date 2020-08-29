import React, { useState } from 'react'
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

export default function TextWriter() {
  const [text, captureText] = useState<null | string>(null)
  const classes = useStyles()

  const captureTextMessage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    captureText(event.currentTarget.value)
  }

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

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
