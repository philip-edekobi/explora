import React from 'react';

import { Flex, Box, Text, Button, Spacer, useMediaQuery } from "@chakra-ui/react";
import Link from 'next/link';

const Navbar = () => {
    const [isSmall] = useMediaQuery("(max-width: 768px)");

    return (
        <Flex pl="4" bgColor="gray.200" h="3.5rem" align="center" >
            <Box style={{cursor: "pointer"}} >
                <Text fontSize="2xl" fontWeight="600" color="purple.500">Explora</Text>
            </Box>
        </Flex>
    );
}

export default Navbar;