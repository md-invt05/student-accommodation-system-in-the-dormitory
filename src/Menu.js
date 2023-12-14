import React, { Component } from 'react'
import {Routes, Route, Link,} from 'react-router-dom';
import Top from './Top';
import { Button, Grid } from '@mui/material';
let Sbutton  = {
    backgroundColor: "#1A237E",
    width: "580px",
    height: "70px"
};
export default class Menu extends Component {
  constructor(props){
    super(props);
  };
  render() {
    return (
        <>
            <Top/>
                <Grid container spacing={8} 
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx = {{backgroundColor: "#E3F2FD", height: "100vh"}}
                >   
                    <Grid item><Link to = "/Find"><Button variant='contained' sx={Sbutton}>Поиск студента</Button></Link></Grid>
                    <Grid item><Button variant='contained' sx={Sbutton}>Добавить студента</Button></Grid>
                    <Grid item><Button variant='contained' sx={Sbutton}>Удалить студента</Button></Grid>
                    <Grid item><Button variant='contained' sx={Sbutton}>Список проживающих студентов</Button></Grid>
                    <Grid item><Button variant='contained' sx={Sbutton}>Отчет об облате проживания</Button></Grid>
                </Grid>
                
        </>
    )
  }
}