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
  '1kva': {
    Comeswith: '1 Battery, 3 solar panels - 200w (Starter)',
    products: ['TV', 'Fan','Laptop', 'Decoder', 'Lights'],
    price: '1,000,000.00',
  },
  '2kva': {
    Comeswith: '2 Batteries, 4 Solar Panels - 440w',
    products: ['1 Energy Saving Fridge','TV', 'Fan', 'Decoders', 'Sound System', 'Lights', 'Charging points'],
    price: '2,000,000.00',
  },

  '3kva': {
    Comeswith: '2 Batteries, 6 Solar Panels - 440w',
    products: ['Freezer','Inverter AC (1hp)','Washing Machine', 'Microwave Oven','1 Energy Saving Fridge','TV', 'Fan', 'Decoders', 'Sound System', 'Lights', 'Charging points'],
    price: '2,450,000.00',
  },
  
  '5kva/8': {
    Comeswith: '4 Batteries, 8 Solar Panels - 440w',
     products: ['1 Energy Saving Fridge','TV', 'Fan', 'Decoders', 'Sound System', 'Lights', 'Charging points'],
     price: '3,500,000.00',
  },

  '5kva/12': {
    Comeswith: '4 Batteries, 12 Solar Panels - 440w',
     products: ['1 Energy Saving Fridge','TV', 'Fan', 'Decoders', 'Sound System', 'Lights', 'Charging points'],
     price: '5,300,000.00',
  },
  
  '10kva/8': {
    Comeswith: '4 Batteries, 8 Solar Panels - 440w',
   products: ['Freezer','Inverter AC (1hp)','Washing Machine', 'Microwave Oven','1 Energy Saving Fridge','TV', 'Fan','and some more......'],
    price: '4,700,000.00',
  },
  '10kva/16': {
    Comeswith: '4 Batteries, 16 Solar Panels - 440w',
   products: ['Freezer','Inverter AC (1hp)','Washing Machine', 'Microwave Oven','1 Energy Saving Fridge','TV', 'Fan','and some more......'],
    price: '8,000,000.00',
  },
};

const Household = () => {
  const [selectedPackage, setSelectedPackage] = useState('1kva');

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
        Residential
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
          <option value="1kva">1kva</option>
          <option value="2kva">2kva</option>
          <option value="5kva/8">5kva</option>
          <option value="5kva/12">5kva/12 panels</option>
          <option value="10kva/8">10kva/8 panels</option>
          <option value="10kva/16">10kva/16 panels</option>
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
