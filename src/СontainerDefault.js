import React from 'react'
import { Box, Container } from '@mui/material'
let Sbox = {
    minWidth: '100%',
    height: '93vh',
    backgroundColor: "#E3F2FD",
    overflow: "hidden",
    display: "flex",
};
export default function ContainerDefault() {
  return (
    <Box sx = {Sbox}>
        <Container sx = {{display: "flex"}}>
        </Container>
    </Box>
  )
}
