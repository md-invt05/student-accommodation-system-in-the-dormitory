import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid'
import {Routes, Route, Link,} from 'react-router-dom';
let buttonStyle = {
    backgroundColor: "#1A237E",
    height: "100%",
    boxShadow: "none",
};
let grid = {
    alignItems: "center",
};
export default class Top extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <>
        <Box>
            <AppBar position='static'>
                <Toolbar className='Toolbar'>
                    <Grid container spacing={2}>
                        <Grid item xs = {2}><p>Иванов Иван Иванович</p></Grid>
                        <Grid item xs = {8}><h1 className='h1'>Система заселения студентов</h1></Grid>
                        <Grid item xs = {2} sx = {grid}><Button variant='contained' sx = {buttonStyle}><Link className = "Link" to ="/">Выйти</Link></Button></Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
        <Routes>
            <Route></Route>
        </Routes>
    </>
    )
  }
}

