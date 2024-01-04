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

// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import Select from '@mui/material/Select'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { states, updateValue } from '../../Config/signalVariables'
import Session from '../User/Session'

const CustomerInput = (props) => {
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
            Customer Details
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='company'
              label='Company Name'
              name='company'
              autoComplete='email'
              value={states.value.company}
              disabled
            />

<TextField
              margin='normal'
              required
              fullWidth
              id='contactemail'
              label='Contact Email'
              name='contactemail'
              autoComplete='email'
              value={states.value.contactemail}
              disabled
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
  return { ...state, ...props }
}

// onSubmitValue is used to avoid naming conflicts with submitValue
const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(CustomerInput)


export const pdfExport = () => {
  return (
  <>  
  <div style="display: flex;">
      <div style="flex: 1;">
<div class="form-container">
<p> <u>1. Customer Information </u></p>
<div class="form-row">

<div class="form-column">
  <label for="textField1">Company:</label>
  <input type="text" id="textField1" name="textField1" placeholder="Enter Company Name" />
</div>
<div class="form-column">
  <label for="textField2">Contact Type:</label>
  <input type="email" id="textField2" name="textField2" placeholder="Enter email here" />
</div> 
</div>  
<div class="form-row">
<div class="form-column">
  <label for="textField1">Contact Name:</label>
  <input type="text" id="textField1" name="textField1" placeholder="Enter text here" />
</div>
<div class="form-column">
  <label for="textField2">Delivery Date:</label>
  <input type="date" id="textField2" name="textField2" placeholder="Enter text here" />
</div> 
</div> 
</div>
  <button type="submit">pdf download</button><br /><br />




  <button type="submit">pdf mail</button>

</div>
</>
)
}
