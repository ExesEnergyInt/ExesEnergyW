import { Box, Flex, Text, Image, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Button, Divider } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';


function Footer() {

  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
    <Box
      backgroundColor="#E3FFF1"
            alignItems="center"
    >
      <Flex
        justifyContent="center"
        w="100%"
        mt='20'
    >
      <Flex
        m={10}
         flexDirection={{base:'column', lg:'row', md:'column' }}
      >
        <Box
          mt='10'
          w={{lg:'50%', md:'100%', base: '100%' }}
          mb={10}
          display={{base:'flex', lg:'none', md:'flex'}}
        >
          <Flex
            gap={4}
            
          >
            <FormControl
              isInvalid={isError}
            >
              <FormLabel
              fontSize={{ lg:'lg', md:'md', base:'base'}}
              >
                Subscribe to our  latest coming newsletter of solar panel
              </FormLabel>
              <Input type='email' value={input} onChange={handleInputChange} placeholder='Enter your email address'
                p={6}
                bgColor="#ffff"
              />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
              )}


          </FormControl>

                        
              <Button
              mt={{base:'11%', md:'7%'}}
              fontSize={{ lg:'lg', md:'md', base:'base'}}
                // gap={4}
                p={5}
                colorScheme='green' >
              
                Subscribe
              </Button>

          </Flex>
          
        </Box>

        {/* NEWSLETTER FOR BIG SCREEN ENDS HERE */}





        <Box
          ml={{ lg:'10%'}}
        >
          <Link to="/Home">
          <Image
            src='/Images/ag(7)1.png'
            width={{ base: '150px', sm: '180px', lg: '250px' }}
          />
        </Link>
        
          <Text as='p'
            w={{ lg: "80%", md: '80%', base: '100%' }}
            mt={5}
            fontSize={{ lg:'lg', md:'md', base: 'sm'}}
          >
            We are a reliable and experienced solar company that offers affordable and sustainable energy solutions, customized to fit your unique needs.
          </Text>

          <Flex
            gap={3}
            color='green'
            mt={5}
          >
            <FaFacebook size='16px' />
            <FaWhatsapp  size='16px'/>
            <FaLinkedin  size='16px'/>
            <FaInstagram size='16px'/>
            <FaTwitter size='16px'/>
            
          </Flex>

        </Box>

        {/* NEWSLETTER SECTION */}

        <Box
          w={{ lg: '50%', md: '50%', base: '100%' }}
          mt={{ base: '20', md:'10', lg:'none' }}
          display={{base:'none', lg:'flex', md:'none'}}
        >
          <Flex
            gap={4}
            
          >
            <FormControl
              isInvalid={isError}
            >
              <FormLabel
              fontSize='12px'
              >
                Subscribe to our  latest coming newsletter of solar panel
              </FormLabel>
              <Input type='email' value={input} onChange={handleInputChange} placeholder='Enter your email address'
                p={6}
                bgColor="#ffff"
              />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
              )}

            </FormControl>
            
            <Button
                mt={8}
                fontSize='lg'
                // gap={4}
                p={5}
                colorScheme='green' >
              
                Subscribe
              </Button>
          

          </Flex>
          
        </Box>
        
      </Flex>

   
    </Flex>
    
    
    
      {/* COPYRIGHT FOOTER */}
      
      
      
      <Divider />

      <Text as='p'
        justifyContent='center'
        textAlign='center'
        p={5}
      >

        Copyright © 2024  All right policy reserved
      
      </Text>
    </Box>
   
  )
}

export default Footer