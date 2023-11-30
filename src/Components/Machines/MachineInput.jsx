// React Imports
import * as React from 'react';

import { signal, effect } from "@preact/signals-react";
// Redux Imports
import { connect } from 'react-redux';
import { submitValue } from '../../Redux/actions/submittedValueActions';



import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const MachineInput = (props) => {

    const machineType = signal('Machine type 1');
    const subModule = signal('Sub Module 1');
    const sites = signal('Sites 1');




    
    const [inputValue, setInputValue] = React.useState(props.defaultInput)

    const updateValue = (input, value) => {
        console.log(input)
        console.log(value)
        switch(input){
            case 'machineType':
                machineType.value = value
                console.log(machineType)
                break;
            case 'subModule':
                subModule.value = value
                break
            case 'sites':
                sites.value = value;
                break;
            default:
                break;
        }
    }
   


    const handleSubmit = async (event) => {
        props.onSubmitValue(inputValue);
        event.preventDefault();
    }



    return (
        <>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Machine Details
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="machinename"
                            label="Machine Name"
                            name="machineName"
                            autoComplete="email"
                            autoFocus />
                        
                            <InputLabel id="demo-simple-select-label">Machine Type -- {machineType.value}</InputLabel>
                            <Select
                                fullWidth
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={machineType.value}
                                label="Machine Type"
                                onChange={  e=>{ updateValue('machineType', e.target.value)} }
                            >
                                <MenuItem value={'Machine type 1'}>Machine type 1</MenuItem>
                                <MenuItem value={'Machine type 2'}>Machine type 2</MenuItem>
                                <MenuItem value={'Machine type 3'}>Machine type 3</MenuItem>
                            </Select>


                            <InputLabel id="demo-simple-select-label">Sub Module</InputLabel>
                            <Select
                                fullWidth
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={subModule}
                                label="Sub Module"
                                onChange={ e=>{ subModule = e.target.value} }
                            >
                                <MenuItem value={'Sub Module 1'}>Sub Module 1</MenuItem>
                                <MenuItem value={'Sub Module 2'}>Sub Module 2</MenuItem>
                                <MenuItem value={'Sub Module 3'}>Sub Module 3</MenuItem>
                            </Select>


                            <InputLabel id="demo-simple-select-label">Site</InputLabel>
                            <Select
                                fullWidth
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sites}
                                label="Site"
                                onChange={e=>{ sites = e.target.value}}
                            >
                                <MenuItem value={'Sites 1'}>Site 1</MenuItem>
                                <MenuItem value={'Sites 2'}>Site 2</MenuItem>
                                <MenuItem value={'Sites 3'}>Site 3</MenuItem>
                            </Select>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit and Enter Customer Details
                        </Button>
                        
                    </Box>
                </Box>
            </Container></>
    );
}


const mapStateToProps = (state, props) => {
    // console.log("state --->", state)
    // console.log("props --->", props)
    return {
        defaultInput: props.defaultInput + ' ' + state.submittedValue,
        todo: state.setWeather
    };
};

// onSubmitValue is used to avoid naming conflicts with submitValue
const mapActionsToProps = {
    onSubmitValue: submitValue
}

export default connect(mapStateToProps, mapActionsToProps)(MachineInput);