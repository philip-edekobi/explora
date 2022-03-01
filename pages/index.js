import { 
  Flex, Box, Text, Spacer, Button, 
  Stack, useMediaQuery 
} from '@chakra-ui/react';

import { Navbar, Footer } from '../components'; 
import earth from '../public/images/earth.png';

import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const [isSmall] = useMediaQuery("(max-width: 660px)");

  const router = useRouter();

  return (
    <Flex flexDirection="column" height="100vh" >
      <Navbar />
      <Flex bgColor="gray.100" h="100%" align={"center"} flexDir={isSmall ? "column" : ""} >
        <Box w={isSmall ? "100%" : "50%"} 
         display="flex" justify="center" align="center" flexDirection="column"
        >
          <Text fontWeight="500" color="purple.400" fontSize="4xl">Explore</Text>
          <Box color="gray.400" pl="1">
            <Text>
              Process large datasets with our machine clusters.
            </Text> <br />
            <Text>
              Rely on our fast query speeds
            </Text> <br />
            <Text>Download and sync across devices</Text>
          </Box>
          <Stack direction='row' spacing={4} mt="6" alignSelf="center">
            <Button colorScheme='purple' variant='solid' onClick={() => router.push("/dashboard")}>
              Get Started
            </Button>
            <Button colorScheme='purple' variant='outline' isDisabled={true} >
              View Existing
            </Button>
          </Stack>
        </Box>
        <Box 
          w={isSmall ? "100%" : "50%"}
          display="flex" justify="center" align="center"
        >
          <Image alt="Picture of the earth." src={earth} width={400} height={400} />
        </Box>
      </Flex>
      <Spacer />
      <Footer />
    </Flex>
  )
}
