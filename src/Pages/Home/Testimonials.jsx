import { Box, Text, Avatar, Flex, IconButton, Heading, HStack, Button, useColorModeValue } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Gbadebo Samuel',
    feedback:
      'My go-to icon pack for every project that I start working on. The flexibility and customization it gives me hasn\'t been matched by anyone so far.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Olamide Balogun',
    feedback:
      'The icons fit perfectly into my project design. I love how customizable and versatile they are.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Damilare Samuel',
    feedback:
      'These icons have become a core part of my design toolkit. Highly recommended for any design project.',
    image: 'https://via.placeholder.com/150',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000; // 5 seconds interval for the slider

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Set up the automatic slide timer using useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    // Clean up the timer when the component is unmounted or when currentIndex changes
    return () => clearInterval(timer);
  }, [currentIndex]);

  const { name, feedback, image } = testimonials[currentIndex];
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box textAlign="center" maxW="700px" mx="auto" py={12} px={6}>
      <Heading as="h3" size="lg" mb={2}>
        Testimonials
      </Heading>
      <Text fontSize="md" color="gray.500" mb={8}>
        Some of the most memorable reviews we heard from our clients
      </Text>

      <Flex position="relative" alignItems="center" justifyContent="center" mb={6}>
        <IconButton
          aria-label="Previous testimonial"
          icon={<FaArrowLeft />}
          onClick={handlePrev}
          position="absolute"
          left="-50px"
          top="50%"
          transform="translateY(-50%)"
          backgroundColor="green.500"
          color="white"
          _hover={{ backgroundColor: 'green.600' }}
          boxShadow="md"
          rounded="full"
          size="lg"
        />
        <Box
          bg={cardBg}
          shadow="xl"
          p={8}
          rounded="lg"
          maxW="550px"  // Increased width of the box
          textAlign="center"
          position="relative"
          borderTopWidth="6px"
          borderTopColor="green.600"
        >
          <Text fontSize="xl" mb={4} fontStyle="italic">
            "{feedback}"
          </Text>
          <Flex align="center" justify="center" mt={6}>
            <Avatar src={image} name={name} mr={2} size="md" />
            <Text fontWeight="bold" fontSize="lg">{name}</Text>
          </Flex>
        </Box>
        <IconButton
          aria-label="Next testimonial"
          icon={<FaArrowRight />}
          onClick={handleNext}
          position="absolute"
          right="-50px"
          top="50%"
          transform="translateY(-50%)"
          backgroundColor="green.500"
          color="white"
          _hover={{ backgroundColor: 'green.600' }}
          boxShadow="md"
          rounded="full"
          size="lg"
        />
      </Flex>

      {/* Dot indicators for the slider */}
      <HStack justify="center" spacing={1}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            w={currentIndex === index ? '12px' : '8px'}
            h={currentIndex === index ? '12px' : '8px'}
            bg={currentIndex === index ? 'green.500' : 'gray.300'}
            rounded="full"
            cursor="pointer"
            onClick={() => goToSlide(index)}
            transition="width 0.3s ease"
          />
        ))}
      </HStack>
    </Box>
  );
};

export default TestimonialSlider;
