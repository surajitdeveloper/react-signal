// React Imports
import * as React from 'react'

import { connect } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { machineAction } from '../../Redux/actions/machineAction'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'

import Box from '@mui/material/Box'

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
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


const MachineInput = (props) => {
  const navigate = useNavigate()

  // const classes = useStyles();

  React.useEffect(() => {
    const initMachineData = {
      machineName: '',
      sites: states.value.sitesList[0].siteId,
      subModule: states.value.subModuleList[0].subModuleId,
      machineType: states.value.machineTypeList[0].machineId
    }
    props.updateMachineData(initMachineData)
  }, [states.value, props.updateMachineData])

  // console.log('component props --->', props)

  const setMachineData = (type, val) => {
    const machineData = { ...props.machineData, [type]: val }
    // console.log('machineData --->', machineData)
    props.updateMachineData(machineData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // const { machineName, sites, subModule, machineType } = props.machineData
    console.log(props.machineData)
    console.log()
    // if (!machineName || !sites || !subModule || !machineType || sites == 0 || subModule == 0 || machineType == 0) {
    //   alert('All data required')
    // } else {
      navigate('/customer')
    // }
  }

  return (
    <>
      
        <Grid container direction="row" 
        >
          <Session />
        <CssBaseline />
          <Grid item xs>
          <Typography component='h1' variant='h5'>
            Customer Details
          </Typography>
            <TextField
              margin='normal'
              required
              fullWidth
              id='customername'
              label='Customer Name'
              name='customername'
              onInput={(e) => updateValue('customername', e.target.value)}
            />

            <TextField
              margin='normal'
              required
              fullWidth
              id='contactEmail'
              label='Contact Email'
              name='contactemail'
              onInput={(e) => updateValue('contactemail', e.target.value)}
            />

            <TextField
              margin='normal'
              required
              fullWidth
              id='contactname'
              label='Contact name'
              name='contactname'
              onInput={(e) => updateValue('contactname', e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='customername'
              label='Customer Name'
              name='customername'
              onInput={(e) => updateValue('customername', e.target.value)}
            />
            </Grid>
            <Grid item xs
        >
            <Typography component='h1' variant='h5'>
            Machine Details
          </Typography>
          
            <TextField
              margin='normal'
              required
              fullWidth
              id='machinename'
              label='Machine Name'
              name='machineName'
              autoComplete='email'
              value={props.machineData.machineName}
              onInput={(e) => setMachineData('machineName', e.target.value)}
              autoFocus
            />
            <InputLabel id='machine-select-label'>Machine Type </InputLabel>
            <Select
              fullWidth
              required
              labelId='machine-select-label'
              id='machine-select'
              value={props.machineData.machineType}
              label='Machine Type'
              onChange={(e) => {
                setMachineData('machineType', e.target.value)
              }}
            >
              {states.value.machineTypeList.map(({ machineId, machineType }) => {
                return (
                  <MenuItem key={`machine_type_${machineId}`} value={machineId}>
                    {machineType}
                  </MenuItem>
                )
              })}
            </Select>

            <InputLabel id='demo-simple-select-label'>Sub Module</InputLabel>
            <Select
              fullWidth
              required
              labelId='machine-submodule-label'
              id='machine-submodule'
              value={props.machineData.subModule}
              label='Sub Module'
              onChange={(e) => {
                setMachineData('subModule', e.target.value)
              }}
            >
              {states.value.subModuleList.map(({ subModuleId, subModule }) => {
                return (
                  <MenuItem key={`sub_modules_${subModuleId}`} value={subModuleId}>
                    {subModule}
                  </MenuItem>
                )
              })}
            </Select>

            <InputLabel id='demo-simple-select-label'>Site</InputLabel>
            <Select
              fullWidth
              required
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={props.machineData.sites}
              label='Site'
              onChange={(e) => {
                setMachineData('sites', e.target.value)
              }}
            >
              {states.value.sitesList.map(({ siteId, sites }) => {
                return (
                  <MenuItem key={`sites_${siteId}`} value={siteId}>
                    {sites}
                  </MenuItem>
                )
              })}
            </Select>
            </Grid>
            <Grid item xs
        >
            <Typography component='h1' variant='h5'>
            Frame Details
          </Typography>
            <TextField
              margin='normal'
              required
              fullWidth
              id='make'
              label='Make'
              name='make'
              onInput={(e) => updateValue('make', e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='modelno'
              label='Model No'
              name='modelno'
              onInput={(e) => updateValue('modelno', e.target.value)}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='serialno'
              label='Serial No'
              name='serialno'
              onInput={(e) => updateValue('serialno', e.target.value)}
            />
            
             <TextField
              margin='normal'
              required
              fullWidth
              id='machinecapacity'
              label='Machine capacity'
              name='machinecapacity'
              onInput={(e) => updateValue('machinecapacity', e.target.value)}
            />
             <TextField
              margin='normal'
              required
              fullWidth
              id='actuatortroke'
              label='Actuator Stroke'
              name='actuatortroke'
              onInput={(e) => updateValue('actuatortroke', e.target.value)}
            />
             <TextField
              margin='normal'
              required
              fullWidth
              id='actuatorrotation'
              label='Actuator rotation'
              name='actuatorrotation'
              onInput={(e) => updateValue('actuatorrotation', e.target.value)}
            />
            <TextField
              // margin='normal'
              required
              fullWidth
              id='Ismachinefullyoperational'
              label='Is machine fully operational?'
              name='Ismachinefullyoperational'
              onInput={(e) => updateValue('Ismachinefullyoperational', e.target.value)}
            />
            
          </Grid>
        </Grid>
        <Container component='form' onSubmit={handleSubmit} noValidate maxWidth='xs'>
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>
      </Container>
    </>
  )
}

const mapStateToProps = (state, props) => {
  return {
    token: state.setUserToken,
    ...state,
    ...props
  }
}

const mapActionsToProps = {
  updateMachineData: machineAction
}

export default connect(mapStateToProps, mapActionsToProps)(MachineInput)
