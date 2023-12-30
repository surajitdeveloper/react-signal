// React Imports
import * as React from 'react'

import { connect } from 'react-redux'
import { userAction } from '../../Redux/actions/userActions'

import { Link, Grid, Button, CssBaseline, TextField, Box, Typography, Container, Avatar, Alert, AlertTitle } from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { useNavigate } from 'react-router-dom'
import { states, updateValue } from '../../Config/signalVariables'

import { API_NAME, API_STATUS } from '../../Config/constant'

import { login } from '../../Api/Api'

const Login = (props) => {
  const navigate = useNavigate()
  const [showError, setShowError] = React.useState(
    states.value.errorMessage.find((e) => e.name == API_NAME.LOGIN_API).status === API_STATUS.FAILED || false
  )
  console.log(states.value.errorMessage.find((e) => e.name == API_NAME.LOGIN_API).status === API_STATUS.FAILED)
  const doLogin = async (e) => {
    e.preventDefault()
    setShowError(false)
    
    try {
      const { username, password } = states.value

      const loginData = await login({ username, password }) // api call

      props.setUserToken(loginData.token) // set value to reducer
      updateValue('username', '')
      updateValue('password', '')
      navigate('/machine')
      // login
    } catch (err) {
      setShowError(true)
      states.value.errorMessage.find((e) => e.name == API_NAME.LOGIN_API).status = API_STATUS.FAILED
      states.value.errorMessage.find((e) => e.name == API_NAME.LOGIN_API).message = err.response.data.message
      // console.log(err.response.data.message)
      // console.log(states.value)
    }
  }

  return (
    <>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Login
          </Typography>
          <Box component='form' onSubmit={doLogin} noValidate={false} sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              onInput={(e) => {
                updateValue('username', e.target.value)
              }}
              label='Email'
              name='email'
              autoFocus
            />

            <TextField
              margin='normal'
              required
              fullWidth
              id='password'
              onInput={(e) => {
                updateValue('password', e.target.value)
              }}
              label='Password'
              name='password'
              type='password'
            />

            {showError ? (
              <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                {states.value.errorMessage.find((e) => e.name == API_NAME.LOGIN_API).message}
              </Alert>
            ) : (
              ''
            )}

            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  // console.log("state --->", state)
  // console.log("props --->", props)
  return {
    ...state
  }
}

const mapActionsToProps = {
  setUserToken: userAction
}

export default connect(mapStateToProps, mapActionsToProps)(Login)
