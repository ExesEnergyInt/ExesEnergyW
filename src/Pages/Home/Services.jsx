import { Flex, Box, Text, Card, CardBody, Stack, Image, Heading } from '@chakra-ui/react';
import React from 'react';
import { ServData } from './ServData';

function Services() {
  return (
    <Flex p={{ base: 4, md: 8, lg: 20 }} flexDir="column" alignItems="center">
      <Text
        as="h1"
        fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
        fontFamily="sans-serif"
        fontWeight="700"
        color="#026834"
        textAlign="center"
        m={8}
      >
        Our Services
      </Text>
      
      <Flex
        mx="auto"
        gap={{ base: 6, md: 10, lg: 20 }}
        wrap="wrap"
        justifyContent="center"
        flexDir={{ base: "column", lg: "row" }}
      >
        {ServData.map((data, index) => {
          const { image, heading, text } = data;
          return (
            <Card
              key={index}
              direction="column"
              mt={{ base: 4, lg: 1 }}
              borderRadius="20px"
              overflow="hidden"
              width={{ base: "100%", sm: "80%", md: "300px", lg: "356px" }}
              boxShadow="lg"
              bgColor="#E3FFF1"
            >
              <Flex justifyContent="center" alignItems="center" bgColor="#E3FFF1">
                <Image
                  src={image}
                  alt={heading}
                  p={4}
                  maxH="200px"
                  objectFit="cover"
                />
              </Flex>

              <Stack m={{ base: 2, md: 4 }}>
                <CardBody>
                  <Heading fontSize={{ base: "lg", md: "xl", lg: "2xl" }} fontWeight={600}>
                    {heading}
                  </Heading>

                  <Text
                    py={2}
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    fontWeight={400}
                  >
                    {text}
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default Services;
