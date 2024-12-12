import { useState } from 'react';
import { Box, Button, Flex, Image, Input, Text, Textarea } from '@chakra-ui/react';

function ContactHero() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = { name, email, subject, message };

    try {
      const response = await fetch('https://backend-exesenergy.vercel.app/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex
      flexDir={{ lg: 'row', md: 'row', sm: 'column', base: 'column' }}
      pt='10%'
      w={{ lg: '80%' }}
      gap={10}
      justify='center'
      align='center'
      m='auto'
    >
      <Box w='100%'>
        <Image src="Images/Contact_Bg.png" />
      </Box>

      <Box w='80%'>
        <Text
          as="h1"
          fontSize={{ base: '2xl', md: '3xl', sm: '3xl' }}
          fontWeight="bold"
          mb={3}
        >
          Get In Touch
        </Text>
        <Text
          as="p"
          w={{ base: '100%', md: '80%' }}
          mt={5}
          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          mb={6}
        >
          Please use the form below to get in touch with us, and our team will get back to you as soon as possible. If you prefer to contact us by phone, you can find our contact details below.
        </Text>

        <Box w={{ base: '100%', md: '90%' }}>
          <Input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            mb={4}
          />
          <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Input your Email"
            mb={4}
          />
          <Input
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            mb={4}
          />
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            mb={4}
          />
        </Box>

        <Button
          mb={4}
          isLoading={isLoading}
          onClick={handleSubmit}
          colorScheme="teal"
        >
          Send
        </Button>
      </Box>
    </Flex>
  );
}

export default ContactHero;
