import { Box, Flex, Image, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';
import { BenefitsData } from './Data/BenefitsData';

function Benefits() {
  return (
    <Flex
      justifyContent="center"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      gap={{ base: 6, md: '8%' }}
      px={{ base: 4, md: 8 }}
      py={{ base: 4, md: 8 }}
      border="none"
    >
      <Box w={{ base: '100%', md: '50%' }} mb={{ base: 4, md: 0 }}>
        <Image
          src="/Images/Services/BluePanel.png"
          alt="Benefits Background"
          w="100%"
          objectFit="cover"
        />
      </Box>

      <Box w={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'left' }}>
        <Text as="h4" color="#006633" fontWeight="700" fontSize={{ base: '2xl', md: '4xl' }}>
          Benefits
        </Text>
        
        <Text as="p" pt={2} fontSize={{ base: 'md', md: 'lg' }}>
          Creating Quality urban lifestyles, building stronger communities
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mt={6}>
          {BenefitsData.map((data, index) => (
            <Flex key={index} align="center" mt={4}>
              <Image src={data.image} alt="Benefit Icon" boxSize={{ base: '20px', md: '30px' }} mr={3} />
              <Text as="p" fontSize={{ base: 'md', md: 'lg' }} fontWeight="600">
                {data.heading}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>

        <Button
          mt={6}
          fontSize={{ base: 'md', md: 'lg' }}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="green"
          px={6}
          py={4}
        >
          Get A Free Quote
        </Button>
      </Box>
    </Flex>
  );
}

export default Benefits;