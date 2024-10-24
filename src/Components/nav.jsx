import React from 'react';
import { Box, Flex, Image, Text, IconButton } from '@chakra-ui/react';
import { a } from 'framer-motion/client';
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


function Nav() {

  const [display, changeDisplay] = useState('none')

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      pos="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      py={2}
      px={{ base: 4, sm: 6, lg: 8 }} 
      backgroundColor="#E3FFF1"
    >
      <Link to="/Home">
        <Image 
          src='/Images/ag(7)1.png'
          width={{ base: '150px', sm: '180px', lg: '250px' }}
        />
      </Link>
      
      <Flex
        gap={5}
        color="Black"
        fontSize={{ base: 'xs', sm: 'sm', lg: 'lg' }}
        textAlign={{ base: 'center', sm: 'right' }} 
        display={{base:'none', sm:'none', lg: 'flex', xl: 'flex'}}
      >
        <Link to="/services">Services</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/verticals">Verticals</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/partner">Our Partner</Link>

      </Flex>

      <IconButton
        aria-label='Open Menu'
        size='lg'
        mr={2}
        icon={<HamburgerIcon />}
        display={{ base: 'flex', sm: 'flex', lg: 'none', xl: 'none' }}
        onClick={() => changeDisplay('flex')}
      />

      <Flex
        w='100vw'
        bgColor='gray.50'
        zIndex={20}
        h='100vh'
        pos='fixed'
        top='0'
        left='0'
        overflowY="auto"
        flexDir='column'
        display={display}
      
      >
        <Flex justify='flex-end'>

          
          <IconButton
            mt={2}
            mr={2}
            aria-label='Close Menu'
            size='lg'
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />

        </Flex>


        <Flex
        flexDir='column'
        align='center'
          gap={5}
          m={10}
        >
          

       <Link to="/services">Services</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/verticals">Verticals</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/partner">Our Partner</Link>

      </Flex>

      </Flex>

     
    </Flex>
  );
}

export default Nav;
