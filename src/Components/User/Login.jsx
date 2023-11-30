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
import Select from '@mui/material/Select';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const states = signal({
    machineType: 'Machine type 1',
    subModule: 'Sub Module 1',
    sites: 'Sites 1'
});


const Login = (props) => {

   



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
                        Login
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="machinename"
                            label="Machine Name"
                            name="machineName"
                            autoComplete="email"
                            autoFocus />
                        
                            <InputLabel id="machine-select-label">Machine Type</InputLabel>
                            <Select
                                fullWidth
                                required
                                labelId="machine-select-label"
                                id="machine-select"
                                value={states.value.machineType}
                                label="Machine Type"
                            >
                                <MenuItem value={'Machine type 1'}>Machine type 1</MenuItem>
                                <MenuItem value={'Machine type 2'}>Machine type 2</MenuItem>
                                <MenuItem value={'Machine type 3'}>Machine type 3</MenuItem>
                            </Select>


                            <InputLabel id="demo-simple-select-label">Sub Module</InputLabel>
                            <Select
                                fullWidth
                                required
                                labelId="machine-submodule-label"
                                id="machine-submodule"
                                value={states.value.subModule}
                                label="Sub Module"
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
                                value={states.value.sites}
                                label="Site"
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

export default connect(mapStateToProps, mapActionsToProps)(Login);