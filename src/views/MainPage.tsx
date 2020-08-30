import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import TextDisplay from 'components/TextDisplay'
import TextWriter from 'components/TextWriter'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const MainPage = () => {
  const classes = useStyles()
  return (
    <Container>
      <h1>This is where you can write a text</h1>
      <Container className={classes.root}>
        <TextWriter />
        <TextDisplay />
      </Container>
    </Container>
  )
}

export default MainPage
