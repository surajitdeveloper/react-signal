// React Imports
import * as React from 'react'

import CssBaseline from '@mui/material/CssBaseline'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { states, updateValue } from '../../Config/signalVariables'
import Session from '../User/Session'

const UserList = (props) => {
  // const navigate = useNavigate()

  console.log('Customer props --->', props)

  const handleSubmit = async (event) => {
    console.log(states.value)
    event.preventDefault()
  }

  return (
    <>
      <Container component='main' maxWidth='xs'>
        <Session />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component='h1' variant='h5'>
            User List
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}></Box>
        </Box>
      </Container>
    </>
  )
}

export default UserList
