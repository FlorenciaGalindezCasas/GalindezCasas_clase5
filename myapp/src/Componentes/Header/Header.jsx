import React from 'react'
import "../Header/Header.css";
import { Box } from '@chakra-ui/react';


function Header() {
  return (
    <Box
      className="logo"
      w="100%"
      h="50px"
      bgGradient="linear(to-r, #7CAFEC, #63F17D)"
    >
      <b>CONTADOR</b>
    </Box>
  );
}

export default Header