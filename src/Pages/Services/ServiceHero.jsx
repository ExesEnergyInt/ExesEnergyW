import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

function ServiceHero() {
  return (
    <Flex
      bgColor="#006633"
      pt="15%"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      // bgSize="cover"
      // bgPosition="center"
      // bgRepeat="no-repeat"
    >
      <Box>
        <Text as="h1"
          color="white"
          fontSize={{ lg: '6xl', md: '4xl', sm: '2xl' }}
          fontFamily="sans-serif"
          fontWeight='600'
          textAlign="center"
        >
          
          SERVICES
        
        </Text>

      </Box>
    </Flex>
  );
}

export default ServiceHero;
