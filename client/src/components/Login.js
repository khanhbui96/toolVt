import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { loginUser } from '../actions/user.actions'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        width: '40vw',
    },
    textfield: {
        margin: 10,
        width: '100%'
    }
}));

 function Login(props) {
    const {errs, loginUser, history} = props
    const classes = useStyles();
    const [data, changeData] = useState({
        email: '',
        password: ''
    });
    useEffect(()=>{
        console.log(errs)
    },[errs])
    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper className={classes.root}>
                <form
                    
                    style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        loginUser(data,()=>(history.push('/home')))
                    }}>
                    <TextField
                        className={classes.textfield}
                        onChange={(e) => {
                            changeData({ ...data, [e.target.name]: e.target.value })
                        }}
                        name='email'
                        label="Email"
                        variant="outlined"
                    />
                    <TextField
                        className={classes.textfield}
                        onChange={(e) => {
                            changeData({ ...data, [e.target.name]: e.target.value })
                        }}
                        name='password'
                        label="Password"
                        variant="outlined"
                    />
                    
                    <Button variant="outlined" type="submit">Login</Button>
                </form>
            </Paper>
        </div>
    
    );
}

const mapStateToProps = state=>({
    errs: state.errs
})
export default connect(mapStateToProps, {loginUser})(withRouter(Login))