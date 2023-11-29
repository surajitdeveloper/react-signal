// React Imports
import * as React from 'react';
// Redux Imports
import { connect } from 'react-redux';
import { submitValue } from '../Redux/actions/submittedValueActions';

import Button from '@mui/material/Button';


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const MachineInput = (props) => {
    
    const [inputValue, setInputValue] = React.useState(props.defaultInput)
   

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = async (event) => {
        props.onSubmitValue(inputValue);
        event.preventDefault();
    }

    const handleReset = (event) => {
        setInputValue('')
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <>
                        <div>
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
                                {/* {JSON.stringify(props.todo)} */}
                            </div>
                        </div>
                        </>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password" />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me" />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
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
                        </Grid>
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