// React Imports
import * as React from 'react'

import { connect } from 'react-redux'

// import { useNavigate } from 'react-router-dom'

import { machineAction } from '../../Redux/actions/machineAction'

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
import { states } from '../../Config/signalVariables'
import Session from '../User/Session'

const MachineInput = (props) => {
  // const navigate = useNavigate()

  React.useEffect(() => {
    console.log(states.value.sitesList)
  })

  // effect(() => console.log(states.value));
  console.log('component props --->', props)

  // const setMachineData = (type, val) => {}

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
            Machine Details
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
              value={props.machineData.machineName}
              // onInput={(e) => updateValue('machineName', e.target.value)}
              autoFocus
            />

            <InputLabel id='machine-select-label'>Machine Type</InputLabel>
            <Select
              fullWidth
              required
              labelId='machine-select-label'
              id='machine-select'
              value={props.machineData.machineType}
              label='Machine Type'
              // onChange={(e) => {
              //   updateValue('machineType', e.target.value)
              // }}
            >
              <MenuItem value={'Machine type 1'}>Machine type 1</MenuItem>
              <MenuItem value={'Machine type 2'}>Machine type 2</MenuItem>
              <MenuItem value={'Machine type 3'}>Machine type 3</MenuItem>
            </Select>

            <InputLabel id='demo-simple-select-label'>Sub Module</InputLabel>
            <Select
              fullWidth
              required
              labelId='machine-submodule-label'
              id='machine-submodule'
              value={props.machineData.subModule}
              label='Sub Module'
              // onChange={(e) => {
              //   updateValue('subModule', e.target.value)
              // }}
            >
              <MenuItem value={'Sub Module 1'}>Sub Module 1</MenuItem>
              <MenuItem value={'Sub Module 2'}>Sub Module 2</MenuItem>
              <MenuItem value={'Sub Module 3'}>Sub Module 3</MenuItem>
            </Select>

            <InputLabel id='demo-simple-select-label'>Site</InputLabel>
            <Select
              fullWidth
              required
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={'1'}
              label='Site'
              // onChange={(e) => {
              //   updateValue('sites', e.target.value)
              // }}
            >
              {states.value.sitesList.map(({siteId, sites}) => {
                return <MenuItem key={`sites_${siteId}`} value={siteId}>{sites}</MenuItem>
              })}
            </Select>
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Submit and Enter Customer Details
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

const mapStateToProps = (state, props) => {
  // console.log("machine state --->", state)
  console.log('props from state --->', props)
  return {
    token: state.setUserToken,
    ...state
  }
}

const mapActionsToProps = {
  updateMachineData: machineAction
}

export default connect(mapStateToProps, mapActionsToProps)(MachineInput)
