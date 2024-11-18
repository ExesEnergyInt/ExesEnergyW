import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import Household from './Household';
import Commercial from './Commercial';
import Remote from './Remote';

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

const PriceHero = () => {
  const [selectedPackage, setSelectedPackage] = useState('3kva');

  return (
    <Box mt="10%">
      <Box>
        <Text
          as="h1"
          fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
          fontFamily="sans-serif"
          fontWeight="700"
          color="#026834"
          textAlign="center"
          mb={8}
        >
          Pricing
        </Text>
        <Text
          as="p"
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
          fontFamily="sans-serif"
          color="#026834"
          textAlign="center"
          mb={8}
        >
          Pricing that suits your budget
        </Text>
      </Box>

      <Flex
        flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
        gap={{ base: 4, lg: 8 }} 
        justifyContent="center" 
        alignItems="center"
      >
        <Remote />
        <Commercial />
        <Household />
      </Flex>
    </Box>
  );
};

export default PriceHero;
