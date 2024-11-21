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
  'Basic': {
    Comeswith: 'Merstek 800w Solar Generator (Basic Plan)',
    products: ['Laptop', 'Phones','Lights', 'Wifi/Router', 'Fan', 'Tv', 'Bulbs'],
    price: '560,000.00',
  },

  'Premium': {
    Comeswith: 'Merstek 1200w Solar Generator (Basic Plan)',
    products: ['Laptops', 'Phones', 'Lights', 'Wifi/Router', 'Fan', 'Tv', 'Bulbs', 'Charging Points'],
    price: '690,000.00',

  }

  // '1x190w2 ': {
  //   Comeswith: 'Merstek 1200w Solar Generator (Premium Plan)',
  //    products: ['Laptop', 'Phones','Lights', 'Wifi/Router', 'Fan', 'Mini Fridge', 'Tv', 'Bulbs'],
  //   price: '690,000.00',
  // },

};

const Household = () => {
  const [selectedPackage, setSelectedPackage] = useState('Basic');

  const handleChange = (e) => {
    setSelectedPackage(e.target.value);
  };

  const { Comeswith, products, price } = packages[selectedPackage];

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
      pt='8'
      w={{base:'50%', lg:'60%' }}
      // height='80vh'
    >
      <Text as="h3"
        fontSize={{ base: '3xl', md: '2xl' }}
        fontWeight="bold"
        mb={4}
        color='green.500'
      >
        Remote
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
          <option value="Basic">Basic Plan - 800w mono solar Gen </option>
          <option value="Premium"> Premium Plan - 1200w mono solar Gen</option>
        </Select>
      </Flex>

      <Text
        mt={4}
        mb={2}
        fontWeight="bold"
        m='auto'
      >
        {Comeswith}
      </Text>

      <ScaleFade initialScale={0.9} in={true}>
        
        <Box
          w="100%"
          lineHeight="40px"
        >
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
          ₦ {price}
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
