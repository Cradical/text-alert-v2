import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import TextWriter from 'components/TextWriter'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  wrapper: {
    width: '85%',
    padding: '40px',
    borderBottom: '1px solid grey',
  },
}))

const MainPage = () => {
  const classes = useStyles()
  return (
    <Container className={classes.wrapper}>
      <Typography variant='h4'>Send a text alert!</Typography>
      <Container className={classes.root}>
        <TextWriter />
      </Container>
      <Typography variant='body2'>
        Add a small text message (less than 140 characters) and include an email
        address (optional) if you wish that I send you a screenshot of the text
        that I got along with a formal introduction!
      </Typography>
    </Container>
  )
}

export default MainPage
