import React, { useState } from 'react';
import { Box, Flex, Image, Text, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Nav() {
  const [display, changeDisplay] = useState('none');

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
      py={3}
      px={{ base: 4, sm: 6, lg: 8 }} 
      backgroundColor="#E3FFF1"
      boxShadow="md"
    >
      {/* Logo */}
      <Link to="/">
        <Image 
          src="/Images/ag(7)1.png"
          width={{ base: '120px', sm: '150px', md: '180px', lg: '200px' }}
          alt="Logo"
        />
      </Link>
      
      {/* Desktop Navigation Links */}
      <Flex
        gap={6}
        color="black"
        fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
        display={{ base: 'none', md: 'none', lg: 'flex' }}
      >
        <Link to="/Services">Services</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/verticals">Verticals</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/partner">Our Partner</Link>
      </Flex>

      {/* Hamburger Icon for Mobile */}
      <IconButton
        aria-label="Open Menu"
        size="lg"
        icon={<HamburgerIcon />}
        display={{ base: 'flex', lg: 'none' }}
        onClick={() => changeDisplay('flex')}
      />

      {/* Mobile Menu */}
      <Flex
        w="100vw"
        h="100vh"
        bgColor="white"
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        flexDir="column"
        display={display}
        overflowY="auto"
      >
        {/* Close Button */}
        <Flex justify="flex-end" p={4}>
          <IconButton
            aria-label="Close Menu"
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        {/* Mobile Navigation Links */}
        <Flex
          flexDir="column"
          align="center"
          gap={6}
          mt={10}
          fontSize="xl"
          color="black"
        >
          <Link to="/Services" onClick={() => changeDisplay('none')}>Services</Link>
          <Link to="/pricing" onClick={() => changeDisplay('none')}>Pricing</Link>
          <Link to="/verticals" onClick={() => changeDisplay('none')}>Verticals</Link>
          <Link to="/case-studies" onClick={() => changeDisplay('none')}>Case Studies</Link>
          <Link to="/resources" onClick={() => changeDisplay('none')}>Resources</Link>
          <Link to="/contact" onClick={() => changeDisplay('none')}>Contact</Link>
          <Link to="/partner" onClick={() => changeDisplay('none')}>Our Partner</Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Nav;
