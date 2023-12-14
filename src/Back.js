import React, { Component } from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
let SBack = {
    position: "fixed",
    left: "0",
};
export default class Back extends Component {
  render() {
    return (
      <Box sx = {SBack}>
            <Link to = '/Menu'><Button>Назад</Button></Link>
      </Box>
    )
  }
}
