import React from 'react';
import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { CasesStudies } from './Data/CaseStudies';

function CaseStudies() {
  return (
    <Box mt="8%"
    mb='10%'
    >
      <Box w="100%" textAlign="center">
        <Text as="h4" pt={2} fontSize={{ base: 'md', md: 'lg' }} fontWeight="300">
          CASE STUDIES
        </Text>
        <Text as="h1" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mt={2}>
          Our Successful Projects
        </Text>
      </Box>

      <Flex
        mt={6}
        wrap="wrap"
        justify="center"
        gap={6}
        w="100%"
      >
        {CasesStudies.map((data, index) => (
          <Box
            key={index}
            borderRadius="10px"
            border="1px solid #E2E8F0"
            overflow="hidden"
            boxShadow="lg"
            maxW={{ base: '100%', sm: '45%', md: '30%' }}
          >
            <Image
              src={data.image}
              alt="case study"
              w="100%"
              h={{ base: '180px', md: '220px' }}
              objectFit="cover"
              borderRadius="10px 10px 0 0"
            />
            <Box p={4}>
              <Text as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="500" mt={2}>
                {data.heading}
              </Text>
              <Text as="p" mt={2} fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
                {data.text}
              </Text>
              <Button
                variant="link"
                rightIcon={<ArrowForwardIcon />}
                mt={4}
                p={2}
                colorScheme="green"
                border="1px solid Black"
              >
                Read More
              </Button>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default CaseStudies;
