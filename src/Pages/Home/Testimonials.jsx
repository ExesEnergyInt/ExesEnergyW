import {
  Box,
  Text,
  Avatar,
  Flex,
  IconButton,
  Heading,
  HStack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Thank you ExesEnergy',
    feedback:
      "Switching to solar with Exesenergy was one of my best decisions this year—I only wish I’d done it sooner! No more worrying about PHCN outages, fuel scarcity, or generator repairs. Plus, Abraham’s support made the process seamless, answering all my questions. And the pricing? A pleasant bonus!",
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Thank you ExesEnergy',
    feedback:
      "Honestly, it's just perfect! If I come shop, everywhere go just calm—super chill, no noise, no stress. Only this place truly gives me joy, every single time. It's the peace and calm I didn’t know I needed. Thank you ExesEnergy",
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Thank you ExesEnergy',
    feedback:
      "Shoutout to Exesenergy and Sunfi! The ease this inverter has brought to my life is unmatched. It’s been a total game-changer, helping me stay on top of my tasks and boosting my efficiency like never before. Thanks a ton, ma! 🙌",
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Thank you ExesEnergy',
    feedback:
      "It helps me save a ton on generator fuel costs by cutting down how often I need to use it. Less noise, less hassle, and more money in my pocket—it’s a win all around!",
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Thank you ExesEnergy',
    feedback:
      "Since I installed it, I haven’t had to spend a single penny on gas or fuel to keep my shop running. It’s efficient, reliable, and has completely revolutionized the way I manage my energy needs!",
    image: 'https://via.placeholder.com/150',
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000;

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const { name, feedback, image } = testimonials[currentIndex];
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box textAlign="center" maxW={{ base: "90%", md: "700px" }} mx="auto" py={12} px={6}>
      <Heading as="h3" size="lg" mb={2} fontSize={{ base: "2xl", md: "3xl" }}>
        Testimonials
      </Heading>
      <Text fontSize={{ base: "sm", md: "md" }} color="gray.500" mb={8}>
        Some of the most memorable reviews we heard from our clients
      </Text>

      <Flex position="relative" alignItems="center" justifyContent="center" mb={6} px={4}>
        <IconButton
          aria-label="Previous testimonial"
          icon={<FaArrowLeft />}
          onClick={handlePrev}
          position="absolute"
          left={{ base: "10px", md: "-50px" }}
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
          p={{ base: 4, md: 8 }}
          rounded="lg"
          maxW="550px"
          textAlign="center"
          position="relative"
          borderTopWidth="6px"
          borderTopColor="green.600"
        >
          <Text fontSize={{ base: "md", md: "xl" }} mb={4} fontStyle="italic">
            "{feedback}"
          </Text>
          <Flex align="center" justify="center" mt={6}>
            <Avatar src={image} name={name} mr={2} size="md" />
            <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>{name}</Text>
          </Flex>
        </Box>
        <IconButton
          aria-label="Next testimonial"
          icon={<FaArrowRight />}
          onClick={handleNext}
          position="absolute"
          right={{ base: "10px", md: "-50px" }}
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
      
      <Box
        mt={5}
        // borderRadius="20"
      >
        <Image
          w='80%'
          mt={10}
          src='Images/forHero/Rated.jpg '
          alt="parners" />
      
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
