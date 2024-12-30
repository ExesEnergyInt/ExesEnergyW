import React from 'react'
import { Box,Divider, Flex, Image, Text } from '@chakra-ui/react';
import { ResData } from '../DataArt/ResData';
import Footer from '../../../Components/footer';
import DownToTop from '../../../Components/DownToTop';
import ScrollToTop from '../../../Components/ScrollToTop';
import Nav from '../../../Components/nav';



function ResdArt() {
  return (
    <>
      
      <Nav />
      
    <Box
    mt="10%">
      {ResData.map((data, index) => (
        <Box
          key={index}
          overflow="hidden"
        >
          <Flex justifyContent="center" mt={5}>
            <Image
              src={data.Resimage}
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
              {data.Resheading}
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
              {data.ResTextHead1}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro1}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU1}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro2}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU2}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro3}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU3}
              </Text>

              
              {/* SECOND SECTION */}


              <Text
              as="p"
              mt={10}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="700"
            >
              {data.ResTextHead2}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro4}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU4}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro5}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU5}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro6}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU6}
              </Text>





              {/* Third SECTION */}


              <Text
              as="p"
              mt={10}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="700"
            >
              {data.ResTextHead3}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro7}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU7}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro8}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU8}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro9}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU9}
              </Text>

              

               {/* FOURTH SECTION */}


              <Text
              as="p"
              mt={10}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="700"
            >
              {data.ResTextHead4}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro10}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU10}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro11}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU11}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.Resintro12}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResintroRU12}
              </Text>

              {/* CONCLUSION */}
              
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
              {data.ResCh1}
            </Text>

            <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.ResC_Intro1}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResC_Text1}
              </Text>
              


              {/* ----------------- */}

              

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.ResC_Intro2}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResC_Text2}
              </Text>
              
              
              {/* ----------------- */}

              <Text
              as="p"
              mt={4}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight="600"
            >
              {data.ResC_Intro3}
            </Text>
            
            <Text
              as="p"
              mt={1}
              fontSize={{ base: 'sm', md: 'md' }}
              color="gray.600"
              fontWeight="600"
            >
              {data.ResC_Text3}
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

export default ResdArt