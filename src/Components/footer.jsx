import {
  Box,
  Flex,
  Text,
  Image,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
  Button,
  Divider,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  const [input, setInput] = useState('');
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === '';

  return (
    <Box backgroundColor="#E3FFF1" py={10} px={4}>
      <Flex justifyContent="center" w="100%">
        <Flex
          m={10}
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="flex-start"
          maxW="1200px"
          w="100%"
        >
          {/* Newsletter Section (Mobile View) */}
          <Box
            w={{ base: '100%', md: '50%' }}
            mb={10}
            display={{ base: 'flex', lg: 'none' }}
            flexDirection="column"
            alignItems="center"
          >
            <FormControl isInvalid={isError} mb={4}>
              <FormLabel fontSize={{ base: 'sm', md: 'md' }} textAlign="center">
                Subscribe to our latest newsletter on solar panels
              </FormLabel>
              <Input
                type="email"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                p={4}
                bgColor="#ffffff"
              />
              {!isError ? (
                <FormHelperText textAlign="center">
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            <Button
              fontSize={{ base: 'sm', md: 'md' }}
              colorScheme="green"
              w="full"
              maxW="200px"
            >
              Subscribe
            </Button>
          </Box>

          {/* Company Info Section */}
          <Box textAlign={{ base: 'center', md: 'left' }} mb={{ base: 10, md: 0 }}>
            <Link to="/Home">
              <Image
                src="/Images/ag(7)1.png"
                width={{ base: '150px', md: '180px', lg: '250px' }}
                mx={{ base: 'auto', md: '0' }}
              />
            </Link>
            <Text
              w={{ base: '100%', md: '80%' }}
              mt={5}
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
            >
              We are a reliable and experienced solar company that offers affordable and
              sustainable energy solutions, customized to fit your unique needs.
            </Text>
            <Flex
              justifyContent={{ base: 'center', md: 'flex-start' }}
              gap={3}
              color="green"
              mt={5}
            >
              <FaFacebook size="20px" />
              <FaWhatsapp size="20px" />
              <FaLinkedin size="20px" />
              <FaInstagram size="20px" />
              <FaTwitter size="20px" />
            </Flex>
          </Box>

          {/* Newsletter Section (Desktop View) */}
          <Box w="50%" display={{ base: 'none', lg: 'flex' }} flexDirection="column">
            <FormControl isInvalid={isError} mb={4}>
              <FormLabel fontSize="md">
                Subscribe to our latest newsletter on solar panels
              </FormLabel>
              <Input
                type="email"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                p={6}
                bgColor="#ffffff"
              />
              {!isError ? (
                <FormHelperText>
                  Enter the email you'd like to receive the newsletter on.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
              )}
            </FormControl>
            <Button mt={4} fontSize="lg" colorScheme="green">
              Subscribe
            </Button>
          </Box>
        </Flex>
      </Flex>

      {/* Copyright Footer */}
      <Divider />
      <Text textAlign="center" py={5} fontSize="sm">
        © 2024 All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
