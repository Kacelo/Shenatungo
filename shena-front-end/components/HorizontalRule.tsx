import React from 'react';
import { Box, Grid, GridItem, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { color } from 'framer-motion';

const HorizontalRule = () =>{
    const columnLayout = useBreakpointValue({ base: 5, sm: 10, md: 50, lg: 200 });

    return(<Box marginTop={'20'} textAlign={'center'} marginRight={`${columnLayout}`} marginLeft={`${columnLayout}`}>
    <hr style={{borderColor:"#ECC94B", borderTopWidth: "3px"}}></hr>
</Box>)
    
}

export default HorizontalRule;