import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Hero() {
  return (
    <Flex
      backgroundColor="#E3FFF1"
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      px={4}
    >
      <Box
        mt={{ base: '10%', sm: '20%', md: '15%', lg: '10%' }}
        textAlign="center"
        maxWidth="90vw"
      >
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
          fontSize={{ base: 'sm', md: 'lg', lg: '2xl' }}
          color="#464646"
        >
          Save money and save the environment today
        </Text>
        
        <Button
          mt={10}
          fontSize="lg"
          gap={4}
          p={8}
          rightIcon={<ArrowForwardIcon size="lg" />}
          colorScheme="green"
        >
          Get A Free Quote
        </Button>

        <Flex justifyContent="center" mt={10}>
          <Image
            src="Images/forHero/Rectangle4204.png"
            alt="Solar Energy"
            maxWidth={{ base: "80%", sm: "60%", md: "50%", lg: "80%" }}
            objectFit="cover"
          />
        </Flex>
      </Box>
    </Flex>
  );
}

export default Hero;
