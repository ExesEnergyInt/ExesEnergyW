import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { Blog_Data } from './B_Data';

function Blogs() {
  return (
    <Box p={{ base: 4, md: 8, lg: 12 }} mb={10}>
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
        {Blog_Data.map((data, index) => (
          <Box
            key={index}
            w={{ base: '90%', sm: '80%', md: '40%', lg: '25%' }}
            maxW="400px"
            borderRadius="10px"
            border="1px solid #E2E8F0"
            overflow="hidden"
            boxShadow="lg"
          >
            <Image
              src={data.image}
              alt="blog"
              w="100%"
              h={{ base: '180px', sm: '220px' }}
              objectFit="cover"
              borderRadius="10px 10px 0 0"
            />
            <Box p={4}>
              <Text as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="500" mt="2">
                {data.heading}
              </Text>
              <Text as="p" mt="2" fontSize={{ base: 'sm', md: 'md' }} color="gray.600">
                {data.text}
              </Text>

              <Button
                as={Link}
                to={data.link}
                variant="link"
                rightIcon={<ArrowForwardIcon />}
                pl="0"
                mt={2}
                colorScheme="green"
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

export default Blogs;
