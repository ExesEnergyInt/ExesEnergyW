import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Blogs() {
  return (
    <Box
      p={{ base: 4, md: 8, lg: 12 }}
      mb={10}
    >
      <Text
        as="h1"
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        fontFamily="sans-serif"
        fontWeight="700"
        color="#026834"
        textAlign="center"
        m={6}
        mb={10}
      >
        Blogs
      </Text>

      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={6}
        flexDir={{ base: 'column', md: 'row', lg: 'row' }}
      >
        {Array(3).fill().map((_, index) => (
          <Box
            key={index}
            w={{ base: '50%', md: '30%', lg: '20%' }}
            borderRadius="10px"
            border="1px solid"
            overflow="hidden"
          >
            <Image
              src="Images/Avocado.png"
              alt="blog"
              w="100%"
              borderRadius="10px 10px 0 0"
            />
            <Box p="3">
              <Text as="h3" fontSize="2xl" fontWeight="500" mt="2">
                Heading
              </Text>
              <Text as="p" mt="2">
                Consilio difficultates superare potest esse, immo
              </Text>
              <Button variant="link" rightIcon={<ArrowForwardIcon />} pl="0">
                Read More
              </Button>
            </Box>
          </Box>
        ))}
      </Flex>

      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={6}
        mt={6}
        flexDir={{ base: 'column', md: 'row', lg: 'row' }}
        display={{base: 'none', md: 'flex', lg: 'flex'}}
      >
        {Array(3).fill().map((_, index) => (
          <Box
            key={index}
            w={{ base: '50%', md: '30%', lg: '20%' }}
            borderRadius="10px"
            border="1px solid"
            overflow="hidden"
          >
            <Image
              src="Images/Avocado.png"
              alt="blog"
              w="100%"
              borderRadius="10px 10px 0 0"
            />
            <Box p="3">
              <Text as="h3" fontSize="2xl" fontWeight="500" mt="2">
                Heading
              </Text>
              <Text as="p" mt="2">
                Consilio difficultates superare potest esse, immo
              </Text>
              <Button variant="link" rightIcon={<ArrowForwardIcon />} pl="0">
                Read More
              </Button>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default Blogs;
