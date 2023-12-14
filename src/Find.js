import React, { Component } from 'react';
import Top from './Top';
import Findline from './Findline';
import { Box } from '@mui/material';
import Back from './Back';
let SBox = {
    display: "flex",
    flexDirection: "space-beetwen",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3F2FD", 
    height: "calc(100vh - 65px)",
};
export default class Find extends Component {
  render() {
    return (
      <>
        <Top/>
        <Back></Back>
        <Box sx = {SBox}>
            <Findline></Findline>
        </Box>
      </>
    )
  }
}
