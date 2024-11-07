import { Box, Flex, Image, Text, Button, Card, SimpleGrid } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react'
import { BenefitsData } from './Data/BenefitsData';
// import { BenefitsData2 } from './Data/BenefitsData';

function Benefits() {
  return (

    <Flex
      justifyContent='center'
      flexDir={{ lg: 'row', md: 'row', sm: 'column' }}
      gap='8%'
      border='none'
    >
      <Box>
        <Image
          src='/Images/Services/BluePanel.png'
          
        />

      </Box>

      <Box>
        <Text as='h4'
          color="#006633"
          fontWeight='700'
          fontSize='4xl'
        >
          Benefits

        </Text>
        
        <Text as='p'
          pt={1}
        >
          Creating Quality urban lifestyles, building stronger communities
        </Text>

        <SimpleGrid
          columns={[2]} 
        
        >

          {BenefitsData.map((data, index) => {
            const { image, heading } = data;
            return (
              // <Card>
                <Flex
                mt={6}
                >
                  <Image
                    src={image}
                    alt='vectors'
                    pr={3}
                    // w='100%'
                  />
                  
                <Text
                  as='p'
                  fontSize='xl'
                  fontWeight='600'
                
                >
                    {heading}
                  </Text>
                </Flex>
              // </Card>
            )
          })}

        </SimpleGrid>
        

         <Button
          mt={4}
          fontSize="lg"
          gap={4}
          p={2}
          rightIcon={<ArrowForwardIcon size="lg" />}
          colorScheme="green"
        >
          Get A Free Quote
        </Button>
        
      </Box>
    </Flex>
  )
}

export default Benefits