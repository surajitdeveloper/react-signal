// React Imports
import * as React from 'react';

import { signal, effect } from "@preact/signals-react";
// Redux Imports
import { connect } from 'react-redux';
import { submitValue } from '../../Redux/actions/submittedValueActions';


// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const MachineInput = (props) => {

    const machineType = signal('Machine type 1');
    const subModule = signal('Sub Module 1');
    const sites = signal('Sites 1');

    console.log(machineType)


    
    const [inputValue, setInputValue] = React.useState(props.defaultInput)
   

    // const handleChange = (event) => {
    //     setInputValue(event.target.value)
    // }

    const handleSubmit = async (event) => {
        props.onSubmitValue(inputValue);
        event.preventDefault();
    }

    // const handleReset = (event) => {
    //     setInputValue('')
    //     props.onSubmitValue(inputValue);
    //     event.preventDefault();
    // }


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
                    {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <Typography component="h1" variant="h5">
                        Machine Details
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <>
                        {/* <div>
                            <div className='form-section'>
                                <form onSubmit={e => handleSubmit(e)} onReset={e => handleReset(e)}>
                                    <label>
                                        Input: <input type="text" value={inputValue} onChange={e => handleChange(e)} />
                                    </label>
                                    <input type="submit" value="Submit" />
                                    <input type="reset" value="Clear" />
                                    <Button variant="contained">Hello world</Button>
                                </form>
                            </div>
                            <div className='todo'>
                                {JSON.stringify(props.todo)}
                            </div>
                        </div> */}
                        </>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="machinename"
                            label="Machine Name"
                            name="machineName"
                            autoComplete="email"
                            autoFocus />
                        
                            <InputLabel id="demo-simple-select-label">Machine Type</InputLabel>
                            <Select
                                fullWidth
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={machineType.value}
                                label="Age"
                                onChange={  e=>{ machineType.value = e.target.value} }
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
                                label="Age"
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
                                label="Age"
                                onChange={e=>{ sites = e.target.value}}
                            >
                                <MenuItem value={'Sites 1'}>Site 1</MenuItem>
                                <MenuItem value={'Sites 2'}>Site 2</MenuItem>
                                <MenuItem value={'Sites 3'}>Site 3</MenuItem>
                            </Select>

                            


                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me" /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit and Enter Customer Details
                        </Button>
                        {/* <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid> */}
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