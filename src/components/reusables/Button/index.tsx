import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}))

const Btn: React.FC<{
  label: string
  onClick: any
}> = ({ label, onClick }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button
        variant='contained'
        color='primary'
        className={classes.button}
        endIcon={<SendIcon />}
        onClick={onClick}>
        {label}
      </Button>
    </div>
  )
}

export default Btn
