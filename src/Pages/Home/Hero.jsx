import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Hero() {
  
  return (
    <Flex
      backgroundColor="#E3FFF1"
      width="100vw"
      height={{ base:"80vh", sm:"50vh", lg:"100vh"}}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      px={4}
      pt={{ lg:'20%', md: '15%', sm:'15%'}}
    >
      <Box
        mt={{sm:'8%', xs: '8%', md: '10%', lg: '20%' }}
        textAlign="center"
        maxWidth="90vw"
      >
        
        <Text
          as="h1"
          fontSize={{ base: '3xl', md: '5xl', lg: '5xl' }}
          fontWeight="700"
          color="#026834"
          mb={2}
        >
          24/7 Solar Power Anywhere  <br/> – Save More
        </Text>
        
        <Text
          as="h4"
          fontSize={{ base: 'sm', md: 'lg', lg: 'lg' }}
          color="#464646"
        >
         Enjoy Seamless Power for Home & Business with Exesenergy
        </Text>
        
        <Button
          mt={10}
          fontSize="lg"
          gap={4}
          p={8}
          rightIcon={<ArrowForwardIcon size="lg" />}
          colorScheme="green"
        >
          Book a Consultation

        </Button>

        <Flex justifyContent="center" mt={5}>
          <Image
            src="Images/forHero/Rectangle4204.png"
            alt="Solar Energy"
            maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
            objectFit="cover"
          />
        </Flex>
      </Box>
    </Flex>
  );
}

export default Hero;
