// React Imports
import * as React from 'react'

import { connect } from 'react-redux'

// import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { states, updateValue } from '../../Config/signalVariables'
import Session from '../User/Session'

const CustomerInput = (props) => {
  // const navigate = useNavigate()

  console.log("Customer props --->",props)

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
            Customer Details
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='machinename'
              label='Machine Name'
              name='machineName'
              autoComplete='email'
              onInput={(e) => updateValue('machineType', e.target.value)}
              autoFocus
            />


            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

const mapStateToProps = (state, props) => {
  // console.log("machine state --->", state)
  // console.log('props --->', props)
  return {...state, ...props}
}

// onSubmitValue is used to avoid naming conflicts with submitValue
const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(CustomerInput)
