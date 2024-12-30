import {
  Flex,
  Box,
  Text,
  Card,
  CardBody,
  Stack,
  Image,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import { ServData } from './ServData';

function Services() {
  return (
    <Flex p={{ base: 4, md: 8, lg: 20 }} flexDir="column" alignItems="center"
    >
      <Text
        as="h1"
        fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
        fontFamily="sans-serif"
        fontWeight="700"
        color="#026834"
        textAlign="center"
        mb={8}
      >
        Our Services
      </Text>
      
      <Flex
        mx="auto"
        gap={{ base: 6, md: 10, lg: 12 }}
        wrap="wrap"
        justifyContent="center"
      >
        {ServData.map((data, index) => {
          const { image, heading, text } = data;
          return (
            <Card
              key={index}
              direction="column"
              borderRadius="20px"
              overflow="hidden"
              width={{ base: "100%", sm: "80%", md: "280px", lg: "320px" }}
              boxShadow="lg"
              bgColor="#E3FFF1"
              mx={{ base: 0, md: 4 }}
              mb={6}
              alignItems="center"
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

              <Stack m={{ base: 4, md: 4 }} alignItems="center">
                <CardBody>
                  <Heading
                    fontSize={{ base: "lg", md: "xl", lg: "xl" }}
                    fontWeight={700}
                    textAlign="center"
                  >
                    {heading}
                  </Heading>

                  <Text
                    py={2}
                    fontSize={{ base: "sm", md: "md", lg: "" }}
                    fontWeight={400}
                    textAlign='justify'

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
