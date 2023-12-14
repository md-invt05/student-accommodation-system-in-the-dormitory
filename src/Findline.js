import React, { Component } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
let Sbox = {
    width: "800px",
    height: "50px",
    borderStyle: "solid",
    borderRadius: "10px",
    borderColor: "#2196f3",
    borderWidth: "3px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
};
let STextField  = {
    "& fieldset" : {border : "none"},
    width: "90%",
    border: "1px",
    display: "flex",
};
let SearchBox = {
    width: "10%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderLeft: "solid 3px",
    borderRadius: "0",
    borderColor: "#2196f3",
    color: "#2196f3",
};
export default class Findline extends Component {
  constructor(props){
    super(props);
  };
  render() {
    return (
      <>
        <Box sx = {Sbox}>
            <TextField autoComplete='off' variant = "outlined" placeholder = "Введите ФИО студента" sx = {STextField}></TextField>
            <Button sx = {SearchBox}>Найти</Button>
        </Box>
      </>
    )
  }
}
