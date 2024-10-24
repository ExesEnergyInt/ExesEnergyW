import { Flex, Text, Image, Box } from '@chakra-ui/react';
import React from 'react'

function Partners() {
  return (
    <Flex p={{ base: 3, lg: 20 }}
      flexDir="column"
      display={{lg: 'flex', md: 'flex', sm: 'none'}}
    >
      <Text
        as="h1"
        fontSize='4xl'
        fontFamily='sans-serif'
        fontWeight='700'
        color='#026834'
        textAlign='center'
        m={3}
      >
        Our Parteners and Clients
      </Text>
      
      <Flex
        mx="auto"
        // gap={20}
      >
            <Box
              direction="column"
              mt={2}
              borderRadius="20"
            
        >
          <Image
            w='100%'
            mt={10}
            src='Images/partners.png'
                alt="parners"
          />
          </Box>
      </Flex>
    </Flex>
  )
}

export default Partners