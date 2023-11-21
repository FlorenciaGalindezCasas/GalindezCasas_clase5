import React from 'react'
import { useState } from 'react'
import { AbsoluteCenter, Container } from "@chakra-ui/react";
import { Grid} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

import { Box } from '@chakra-ui/react';
import "../ContadorResponsive/ContadorResponsive.css"

function ContadorResponsive() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleClickDecr = () => {
        if(count > 0){
         setCount(count - 1);   
        }
        
    };

    const handleClickReset = () => {
        setCount(0);
    };

  return (
    <Box className="displayCont" h="100vh">
      <AbsoluteCenter className="cont" color="black" axis="both">
        <Text fontSize='6xl'>{count}</Text>
        <Grid className="btns" templateColumns="repeat(3, 1fr)" gap={15}>
          <IconButton
            icon={<MinusIcon />}
            onClick={handleClickDecr}
            border="2px solid #7CAFEC"
          />
          <IconButton
            icon={<PiArrowCounterClockwiseBold />}
            onClick={handleClickReset}
            border="2px solid #7CAFEC"
          />
          <IconButton
            icon={<AddIcon />}
            onClick={handleClick}
            border="2px solid #7CAFEC"
          />
        </Grid>
      </AbsoluteCenter>
    </Box>
  );
}

export default ContadorResponsive