import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import { API } from 'aws-amplify'
// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles(() => ({
//   root: {},
// }))

const TextDisplay: React.FC = () => {
  const [texts, setTexts] = useState<Array<string>>([])

  useEffect(() => {
    const fetchTexts = async () => {
      const response = await API.graphql({ query: listText })
      setTexts(response.data.listText.items)
    }
  })

  return <Container>display some texts</Container>
}

export default TextDisplay
