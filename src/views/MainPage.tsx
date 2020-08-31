import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

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
      <Typography variant='h4'>Write a small message below</Typography>
      <Container className={classes.root}>
        <TextWriter />
      </Container>
    </Container>
  )
}

export default MainPage
