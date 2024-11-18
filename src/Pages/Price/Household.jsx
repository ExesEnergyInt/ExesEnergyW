import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Select,
  Button,
  VStack,
  ScaleFade,
} from '@chakra-ui/react';

// Package data
const packages = {
  '3kva': {
    products: ['TV', 'Fan', 'Lighting'],
    price: 300,
  },
  '5kva': {
    products: ['TV', 'Fridge', 'Fan', 'Lighting'],
    price: 500,
  },
  '8kva': {
    products: ['TV', 'Washing Machine', 'Lighting', 'Microwave'],
    price: 800,
  },
  '20kva': {
    products: ['All House Appliances'],
    price: 2000,
  },
};

const Household = () => {
  const [selectedPackage, setSelectedPackage] = useState('3kva');

  const handleChange = (e) => {
    setSelectedPackage(e.target.value);
  };

  const { products, price } = packages[selectedPackage];

  return (
      <Flex
      direction="column"
      align="start"
      p={{ base: 4, md: 8 }}
      bg="white"
      borderRadius="50px"
      boxShadow="md"
      maxW={{ base: '100%', sm: '90%', md: '80%', lg: '60%' }}
      mx="auto"
      mb={10}
      // height='80vh'
    >
      <Text as="h3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={4}>
        House Hold
      </Text>
      <Flex
        flexDirection={{base: 'column', sm: 'column', lg:'row', md:'row'}}
        mb={4}
        w="100%"
        textAlign={{ base: 'center', md: 'left' }}
        gap={3}
      >
        <Text mb={2}>Select your solar package plan:</Text>
        <Select
          value={selectedPackage}
          onChange={handleChange}
          w={{ base: '100%', md: '100px' }}
          mx={{ base: 'auto', md: 0 }}
        >
          
          <option value="3kva">3kva</option>
          <option value="5kva">5kva</option>
          <option value="8kva">8kva</option>
          <option value="20kva">20kva</option>
        </Select>
      </Flex>

      <ScaleFade initialScale={0.9} in={true}>
        
        <Box w="100%">
          <Text as="h4" fontSize={{ base: 'md', md: 'lg' }} fontWeight="semibold" mb={2}>
            What it can power:
          </Text>
        
          <VStack spacing={2} align="start">
            {products.map((product, index) => (
              <Text key={index}>• {product}</Text>
            ))}
          </VStack>

          
        </Box>

      </ScaleFade>
      <Box
        textAlign='center'
        mx='auto'
      >
        <Text
          mt={4}
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight="bold"
          color="green.500"
        >
          ${price}
        </Text>
        
        <Button
          mt={3}
          colorScheme="green"
          size={{ base: 'sm', md: 'md' }}
        >
          Choose
        </Button>
      </Box>
    </Flex>

    
  );
};

export default Household;
