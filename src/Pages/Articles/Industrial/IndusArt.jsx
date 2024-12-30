import React from 'react'
import { Box, Button, Divider, Flex, Image, Input, Text, Textarea } from '@chakra-ui/react';
// import { CommData } from './DataArt/CommData';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { IndusData } from '../DataArt/IndusData';
import Footer from '../../../Components/footer';
import DownToTop from '../../../Components/DownToTop';
import ScrollToTop from '../../../Components/ScrollToTop';
import Nav from '../../../Components/nav';



function IndusArt() {
  return (
    <>
      
      <Nav />

    <Box
    mt="10%">
      {IndusData.map((data, index) => (
        <Box
          key={index}
          overflow="hidden"
          // m="auto"
          // maxW={{ base: '100%', sm: '45%', md: '50%' }}
        >
          <Flex justifyContent="center" mt={5}>
            <Image
              src={data.image}
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
              {data.heading}
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
              {data.TextHead1}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro1}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU1}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro2}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU2}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro3}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU3}
              </Text>

              
              {/* SECOND SECTION */}


              <Text
              as="p"
              mt={10}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="700"
            >
              {data.TextHead2}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro4}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU4}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro5}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU5}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro6}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU6}
              </Text>





              {/* Third SECTION */}


              <Text
              as="p"
              mt={10}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="700"
            >
              {data.TextHead3}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro7}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU7}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro8}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU8}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro9}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU9}
              </Text>

              

               {/* FOURTH SECTION */}


              <Text
              as="p"
              mt={10}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="700"
            >
              {data.TextHead4}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro10}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU10}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro11}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU11}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.intro12}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.introRU12}
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
                {data.Ch1}
              </Text>
              
              <Text
                as="p"
                mt={4}
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="600"
              >
                {data.C_Intro1}
              </Text>
                          
              <Text
                as="p"
                mt={1}
                fontSize={{ base: 'sm', md: 'md' }}
                color="gray.600"
                fontWeight="600"
              >
                {data.C_Text1}
              </Text>
              
              {/* ----------------- */}
              
              <Text
                as="p"
                mt={4}
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="600"
              >
                {data.C_Intro2}
              </Text>
              
              <Text
                as="p"
                mt={1}
                fontSize={{ base: 'sm', md: 'md' }}
                color="gray.600"
                fontWeight="600"
              >
                {data.C_Text2}
              </Text>
              
              {/* ----------------- */}
            
              <Text
                as="p"
                mt={4}
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="600"
              >
                
                {data.C_Intro3}
              </Text>
              <Text
                as="p"
                mt={1}
                fontSize={{ base: 'sm', md: 'md' }}
                color="gray.600"
                fontWeight="600"
              >
                {data.C_Text3}
              </Text>
            </Box>
          </Box>
        </Box>
      ))}
      </Box>

      <DownToTop />
      <ScrollToTop />
      <Footer />
      </>
  )
}

export default IndusArt