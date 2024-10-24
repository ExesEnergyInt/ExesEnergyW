import { Flex, Text, Card, CardBody, Stack, Image, Link, Icon, Heading, Button } from '@chakra-ui/react';
import React from 'react';
import { SoluData } from './SolutionData';


function Solution() {
  return (
    <Flex p={{ base: 3, lg: 20 }}
      flexDir="column"
      display={{lg: 'flex', md: 'flex', sm: 'none'}}
    >
      <Text
        as="h1"
        fontSize='6xl'
        fontFamily='sans-serif'
        fontWeight='700'
        color='#026834'
        textAlign='center'
        m={8}
      >
        Our Solar Solutions
      </Text>
      
      <Flex
        mx="auto"
        gap={20}
        
      >
        {SoluData.map((data, index) => {
          const { image, heading, text } = data;
          return (
            <Card
              src={image}
              key={index} // Added key prop
              direction="column"
              mt={5}
              borderRadius="20"
            
            >
              <Image
                w='100%'
                objectFit="cover"
                borderRadius="20"
                src={image}
                alt="Commercial"
              />

              <Stack m={{ base: 1, lg: 3 }} w={["100%", "356px", "100%"]}>
                <CardBody>
                  <Heading fontSize="24px" fontFamily="clash" fontWeight={600}>
                    {heading}
                  </Heading>

                  <Text
                    py="1"
                    px='1'
                    fontFamily="manrope"
                    fontSize="18px"
                    fontWeight={400}
                  >
                    {text}
                  </Text>

                  <Button
                    width='100%'
                    mt='2'
                    colorScheme='green'
                    p='6'
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
