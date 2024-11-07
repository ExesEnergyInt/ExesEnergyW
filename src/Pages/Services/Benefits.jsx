import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react'

function Benefits() {
  return (

    <Flex
      flexDir={{ lg: 'column', md: 'column', sm: 'row' }}
      gap='4'
    >
      <Box>
        <Image
          src='/Images/Services/BluePanel.png'
          w='100%'
        />

      </Box>

      <Box>
        <Text as='h4'
          color="#006633"
          fontWeight='700'
        >
          Benefits

        </Text>
        
        <Text as='p'
          pt={3}
        >
          Creating Quality urban lifestyles, building stronger communities
        </Text>

        <Flex>
          <Flex>
            <Image
              src='/Images/Services/UIUX_2.png'
            />
            <Text as='p'>
              Experienced
            </Text>

          </Flex>
          <Flex>
            <Image
              src='/Images/Services/UIUX_2.png'
            />
            <Text as='p'>
              Affordable
            </Text>

          </Flex>
          <Flex>
            <Image
              src='/Images/Services/UIUX_2.png'
            />
            <Text as='p'>
              Reliable
            </Text>

          </Flex>
          <Flex>
            <Image
              src='/Images/Services/UIUX_2.png'
            />
            <Text as='p'>
              Customizable
            </Text>

          </Flex>
          <Flex>
            <Image
              src='/Images/Services/UIUX_2.png'
            />
            <Text as='p'>
              Sustainable
            </Text>

          </Flex>
          <Flex>
            <Image
              src='/Images/Services/UIUX_2.png'
            />
            <Text as='p'>
              Trustworthy
            </Text>

          </Flex>
        </Flex>

         <Button
          mt={10}
          fontSize="lg"
          gap={4}
          p={8}
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