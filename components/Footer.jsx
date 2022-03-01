import React from 'react';

import { Flex, Text, Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
        justify="center" align="center" 
        color="gray.600"
        flexDirection="column" bgColor="gray.200" py="3" 
    >
        <Text>Explora&copy;2021</Text>
        <Box>
            <Text>
                Created by Abolo Samuel and Edekobi Philip
            </Text>
        </Box>
    </Flex>
  );
}

export default Footer;