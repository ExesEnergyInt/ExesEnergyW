import { Button, Flex, Image, Text, Box } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react'

function Questions() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={6}
      mt={10}
      flexDir={{ base: 'column', md: 'row', lg: 'row' }}
      display={{base: 'column', md: 'flex', lg: 'flex'}}
    >

      <Box
        display={{ base: 'flex', md: 'none', lg: 'none' }}
        justifyContent='center'
      >
        <Image
          src="Images/forHero/Rectangle4216.png"
          alt="blog"
          w={{ lg: '100%', md:'md', base:'70%'}}
          borderRadius="10px 10px 0 0"
        >

        </Image>

      </Box>

      <Box
        w={{ lg:'40%', md:'50%', base:'100%'}}
      >
        <Text
          as="h1"
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          fontFamily="sans-serif"
          fontWeight="700"
          color="#026834"
          textAlign="center"
          m={3}
          // ml={0}
          
      >
        Questions? Speak to Our Experts
        </Text>
        
        <Text
          as='p'
          pr={10}
          fontSize={{ lg: 'lg', md:'md', base:'base'}}
          m={{lg:'none', md:'none', base:'20px'}}
        >
          Our Renewable Energy Experts are always available to speak with you and share valuable insights and details regarding your requests, as well as guide you towards finding the right solar solutions that meet your energy needs and align with your budget.
        </Text>
        
        <Button
          mt={10}
          m={{ lg: 'none', md: 'none', base: '20px' }}
          fontSize={{ lg: 'lg', md:'md', base:'base'}}
          gap={4}
          p={{ lg: '8', md:'8', base:'base'}}
          rightIcon={<ArrowForwardIcon size='lg' />}
          colorScheme='green' >
          Get A Free Quote 
        </Button>
      </Box>

      <Box
        display={{ base: 'none', md: 'flex', lg: 'flex' }}
      >
        <Image
          src="Images/forHero/Rectangle4216.png"
          alt="blog"
          w="100%"
          borderRadius="10px 10px 0 0"
        >

        </Image>

      </Box>
    </Flex>
  )
}

export default Questions