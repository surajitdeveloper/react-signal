// React Imports
import * as React from 'react';

import { signal } from "@preact/signals-react";
// Redux Imports
import { connect } from 'react-redux';
import { submitValue } from '../../Redux/actions/submittedValueActions';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const states = signal({
    username: '',
    password: ''
});


const Login = (props) => {
    const updateValue = (input, value) => {

        states.value = { ...states.value, [input]: value };
       
    }

    const doLogin = async (e) =>{
        e.preventDefault();
        alert("login")
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
                        Login
                    </Typography>
                    <Box component="form" onSubmit={doLogin} noValidate={false} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            value={states.value.username}
                            onInput={  e=>{ updateValue('username', e.target.value)} }
                            label="Email"
                            name="email"
                            autoFocus />
                        
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            value={states.value.password}
                            onInput={  e=>{ updateValue('password', e.target.value)} }
                            label="Password"
                            name="password"
                            type='password'
                             />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
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
    return {
        defaultInput: props.defaultInput + ' ' + state.submittedValue,
        todo: state.setWeather
    };
};

const mapActionsToProps = {
    onSubmitValue: submitValue
}

export default connect(mapStateToProps, mapActionsToProps)(Login);