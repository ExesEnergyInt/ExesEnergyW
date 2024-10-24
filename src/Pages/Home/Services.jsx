import { Flex, Box, Text, Card, CardBody, Stack, Image, Heading } from '@chakra-ui/react';
import React from 'react';
import { ServData } from './ServData';

function Services() {
  return (
    <Flex p={{ base: 3, lg: 20 }} flexDir="column">
      <Text
        as="h1"
        fontSize='6xl'
        fontFamily='sans-serif'
        fontWeight='700'
        color='#026834'
        textAlign='center'
        m={8}
      >
        Our Services
      </Text>
      
      <Flex
        mx="auto"
        gap={20}
        flexDir={{ base: "column", md: "column", lg: "row" }}
      >
        {ServData.map((data, index) => {
          const { image, heading, text } = data;
          return (
            <Flex key={index} flexDir={{ base: "column", md: "column", lg: "row" }}>
              <Card
                direction="column"
                mt={1}
                borderRadius="20"
                overflow="hidden" // Optional: to ensure rounded corners
                // boxSizing='borderbox'
                width={80}
              >
                <Flex justifyContent="center" alignItems="center" height="100%" bgColor='#E3FFF1'>
                  <Image
                    src={image}
                    alt="Commercial"
                    p={2}
                  />
                </Flex>

                <Stack m={{ base: 1, lg: 3 }} w={["100%", "356px", "100%"]}>
                  <CardBody>
                    <Heading fontSize="24px" fontFamily="clash" fontWeight={600}>
                      {heading}
                    </Heading>

                    <Text
                      py="1"
                      px='1'
                      fontFamily="manrope"
                      fontSize="16px"
                      fontWeight={400}
                    >
                      {text}
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default Services;
