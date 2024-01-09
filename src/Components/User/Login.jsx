// React Imports
import * as React from 'react'

import { connect } from 'react-redux'
import { callLoginAction } from '../../Redux/actions/userActions'

import { Link, Grid, Button, CssBaseline, TextField, Box, Typography, Container, Avatar, Alert, AlertTitle } from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { useNavigate } from 'react-router-dom'
import { states, updateValue } from '../../Config/signalVariables'

import { LOGIN_API, API_CALL } from '../../Config/constant'

import { withErrorBoundary, useErrorBoundary } from 'react-use-error-boundary'

const Login = withErrorBoundary((props) => {
  const [loginBtnText, setLoginBtnText] = React.useState('Login')
  const [logindisable, setLogindisable] = React.useState(false)
  const navigate = useNavigate()
  const api = API_CALL.find((e) => e.NAME === LOGIN_API)
  const redirect = (navigate) => {
    // if (props.token || API_CALL.find((e) => e.NAME === LOGIN_API).DATA.token) {
    updateValue('username', '')
    updateValue('password', '')
    navigate('/machine') // redirect
  }

  React.useEffect(() => {
    // console.log("effect --->",props)
    // console.log("effect --->",api)
    if (props.token) redirect(navigate)
  }, [props.token])
  const [error, resetError] = useErrorBoundary(
    // You can optionally log the error to an error reporting service
    (error, errorInfo) => {
      console.log(error)
      console.log(errorInfo)
    }
  )
  const [showError, setShowError] = React.useState(false)
  // states.value.errorMessage.find((e) => e.name == LOGIN_API).status === API_STATUS.FAILED ||
  const doLogin = async (e) => {
    e.preventDefault()
    setShowError(false)
    resetError()

    try {
      const { username, password } = states.value
      setLoginBtnText('loading...')
      setLogindisable(true)
      await props.doLogin({ username, password }) // login api call

      // console.log('props --->', props)
      console.log('API DATA --->', api)
      setLoginBtnText('Login')
      setLogindisable(false)
      if (api.DATA.error) setShowError(true)
    } catch (err) {
      console.log(err)
      console.log(error)
      setShowError(true)
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

            {showError && api.DATA.error ? (
              <Alert severity='error'>
                <AlertTitle>Error - {api.DATA.error.code}</AlertTitle>
                {api.DATA.error.message}
              </Alert>
            ) : (
              ''
            )}

            <Button disabled={logindisable} type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              {loginBtnText}
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
})

const mapStateToProps = (state) => {
  // console.log("state --->", state)
  // console.log("props --->", props)
  return {
    token: state.token,
    ...state
  }
}

const mapActionsToProps = {
  doLogin: callLoginAction
}

export default connect(mapStateToProps, mapActionsToProps)(Login)
