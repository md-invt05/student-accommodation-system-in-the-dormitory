import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {Routes, Route, Link,} from 'react-router-dom';
import { Component } from 'react'
export default class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      login: '',
      password: '',
      to: '',
    };
    this.auth = this.auth.bind(this);
    this.enterLogin = this.enterLogin.bind(this);
    this.enterPassword = this.enterPassword.bind(this);
  };
  auth(){
    if(this.state.login == 'Login' && this.state.password == 'Password'){
      this.setState({
        to: '/Menu'
      })
    }
    else{
      this.setState({
        to: '/'
      })
    }
  }
  enterLogin(event){
    this.setState({
      login: event.target.value
    });
  }
  enterPassword(event){
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <Box className = "box">
      <h1>Система заселения студентов</h1>
      <Grid container direction = "column" alignItems = "center" spacing = {2}>
          <Grid item xs = {6}>  
            <Box component="form" className='Form'>
                <h2>Авторизация</h2>
                <TextField autoComplete='off' onChange = {this.enterLogin} value = {this.state.login} label = "Enter login" className='TextField'></TextField>
                <TextField autoComplete='off' onChange = {this.enterPassword} value = {this.state.password} label = "Enter password" className='TextField'></TextField>
                <Link onClick = {this.auth} className='Link' to = {this.state.to}><Button sx={{backgroundColor: "#1A237E"}} variant='contained' >Enter</Button></Link>
            </Box>
          </Grid>
      </Grid>
    </Box>  
    )
  }
}
