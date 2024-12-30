import { Flex, Text, Card, CardBody, Stack, Image, Heading, Button } from '@chakra-ui/react';
import React from 'react';
import { SoluData } from './SolutionData';
import { Link } from 'react-router-dom';

function Solution() {
  return (
    <Flex
      p={{ base: 4, md: 8, lg: 20 }}
      flexDir="column"
      alignItems="center"
      mt={{ lg:36,}}
    >
      <Text
        as="h1"
        fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
        fontFamily="sans-serif"
        fontWeight="700"
        color="#026834"
        textAlign="center"
        mt={10}
      >
        Our Solar Solutions
      </Text>

      <Flex
        wrap="wrap"
        justifyContent="center"
        gap={{ base: 6, md: 8, lg: 10 }}
        mt={10}
      >
        {SoluData.map((data, index) => {
          const { image, heading, text, link } = data;
          return (
            <Card
              key={index} // Added key prop
              direction="column"
              width={{ base: "90%", sm: "80%", md: "300px", lg: "356px" }}
              borderRadius="20px"
              boxShadow="lg"
              overflow="hidden"
            >
              <Image
                width="100%"
                objectFit="cover"
                borderRadius="20px 20px 0 0"
                src={image}
                alt={heading}
              />

              <Stack m={{ base: 2, md: 3 }}>
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

                  <Button
                    as={Link}
                    to={link}
                    width="100%"
                    mt={4}
                    colorScheme="green"
                    py={6}
                  >
                    Learn More
                  </Button>
                </CardBody>
              </Stack>
            </Card>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default Solution;
