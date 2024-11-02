import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { ArrowForwardIcon} from '@chakra-ui/icons'
// import { FaFacebook } from 'react-icons/fa';

function Hero() {
  return (
    <Flex
      backgroundColor="#E3FFF1"
      width="100vw"
      Height="100vh" 
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      px={4}
    >
      <Box
        mt={{ sm:'sm', md: '15%', xl: '8%', lg: '8%'}}
        textAlign="center">

        <Text
          as="h1"
          fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
          fontWeight="700"
          color="#026834"
          mt={10}
          mb={2}
        >
          Switch to Solar Energy Today
        </Text>
        <Text
          as="h2"
          fontSize={{ xs: 'sm', base: 'md', md: 'lg', lg: '2xl' }}
          color="#464646"
        >
          Save money and save the environment today
        </Text>
        
        <Button
          mt={10}
          fontSize='lg'
          gap={4}
          p={8}
          rightIcon={<ArrowForwardIcon size='lg' />}
          colorScheme='green' >
          
          Get A Free Quote

        </Button>


        <Image
          mt={10}
          src='Images/forHero/Rectangle4204.png'
        />
        
      </Box>
    </Flex>
  );
}

export default Hero;
