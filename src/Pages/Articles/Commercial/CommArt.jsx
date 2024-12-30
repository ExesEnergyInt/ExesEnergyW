import React from 'react'
import { Box, Button, Divider, Flex, Image, Input, Text, Textarea } from '@chakra-ui/react';
import { CommData } from '../DataArt/CommData';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Nav from '../../../Components/nav';
import DownToTop from '../../../Components/DownToTop';
import Footer from '../../../Components/footer';
import ScrollToTop from '../../../Components/ScrollToTop';
function CommArt() {
  return (
    <>
      <Nav />
    
    <Box
    mt="10%">
      {CommData.map((data, index) => (
        <Box
          key={index}
          overflow="hidden"
          // m="auto"
          // maxW={{ base: '100%', sm: '45%', md: '50%' }}
        >
          <Flex justifyContent="center" mt={5}>
            <Image
              src={data.Coimage}
              alt="Solar Energy"
              maxWidth={{ base: "100%", sm: "100%", md: "100%", lg: "50%" }}
              objectFit="cover"
            />
          </Flex>
          <Box p={4}>
            <Text as="h3"
              fontSize={{ base: 'lg', md: '2xl' }}
              fontWeight="900"
              mt={2}
              textAlign="center"
              textTransform='uppercase'
            >
              {data.Coheading}
            </Text>

            {/* HEADER ENDS HERE!!! */}
            
            <Box
              ml={10}
              mr={10}
            >

            <Text
              as="p"
              mt={10}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="700"
            >
              {data.CoTextHead1}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro1}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU1}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro2}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU2}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro3}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU3}
              </Text>

              
              {/* SECOND SECTION */}


              <Text
              as="p"
              mt={10}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="700"
            >
              {data.CoTextHead2}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro4}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU4}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro5}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU5}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro6}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU6}
              </Text>





              {/* Third SECTION */}


              <Text
              as="p"
              mt={10}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="700"
            >
              {data.CoTextHead3}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro7}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU7}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro8}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU8}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro9}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU9}
              </Text>

              

               {/* FOURTH SECTION */}


              <Text
              as="p"
              mt={10}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="700"
            >
              {data.CoTextHead4}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro10}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU10}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro11}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU11}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Cointro12}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.CointroRU12}
              </Text>

              
              <Divider
                mt={6}
                borderWidth={1}
                borderColor="black"
              />
              
              <Text
                as="p"
                mt={10}
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="700"
              >
                {data.CoCh1}
              </Text>
              
              <Text
                as="p"
                mt={4}
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="600"
              >
                {data.CoC_Intro1}
              </Text>
                          
              <Text
                as="p"
                mt={1}
                fontSize={{ base: 'sm', md: 'md' }}
                color="gray.600"
                fontWeight="600"
              >
                {data.CoC_Text1}
              </Text>
              
              {/* ----------------- */}
              
              <Text
                as="p"
                mt={4}
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="600"
              >
                {data.CoC_Intro2}
              </Text>
              
              <Text
                as="p"
                mt={1}
                fontSize={{ base: 'sm', md: 'md' }}
                color="gray.600"
                fontWeight="600"
              >
                {data.CoC_Text2}
              </Text>
              
              {/* ----------------- */}
            
              <Text
                as="p"
                mt={4}
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="600"
              >
                
                {data.CoC_Intro3}
              </Text>
              <Text
                as="p"
                mt={1}
                fontSize={{ base: 'sm', md: 'md' }}
                color="gray.600"
                fontWeight="600"
              >
                {data.CoC_Text3}
              </Text>
              
            </Box>
          </Box>
        </Box>
      ))}
      </Box>
      <DownToTop />
      <Footer />
      <ScrollToTop />
    </>

  )
}

export default CommArt