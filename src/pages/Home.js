import React from 'react';
import { Box, Heading, Text, Button, VStack, Image, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Box as="footer" py={4} textAlign="center" bg="gray.800" color="white">
    <Text fontSize="sm">© 2024 Skin Cancer Detection. All rights reserved.</Text>
  </Box>
);

const Home = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Box flex="1" py={10} px={6} bg="gray.900" color="white">
        <Heading as="h1" size="2xl" mb={8} textAlign="center">
          Welcome to Skin Cancer Detection
        </Heading>
        <Text fontSize="lg" mb={8} textAlign="center">
          Empowering you with early detection and reliable information to fight cancer.
        </Text>

        <VStack spacing={8} align="start" maxW="800px" mx="auto">
          <Box>
            <Heading as="h2" size="lg" mb={4}>
              What is Cancer?
            </Heading>
            <Text fontSize="md">
              Cancer is a disease where abnormal cells divide uncontrollably and destroy body tissue. 
              It can start almost anywhere in the human body, which is made up of trillions of cells.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Causes of Cancer
            </Heading>
            <Text fontSize="md">
              Cancer can be caused by a variety of factors, including genetic mutations, environmental 
              exposures such as tobacco smoke, radiation, chemicals, and infections. Unhealthy lifestyle 
              choices like poor diet, lack of physical activity, and alcohol consumption also play a role.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>
              Global Cancer Statistics
            </Heading>
            <Text fontSize="md">
              Each year, approximately 10 million people die from cancer, making it one of the leading 
              causes of death worldwide. Early detection and treatment are crucial in improving survival 
              rates and reducing the global cancer burden.
            </Text>
          </Box>
        </VStack>

        <VStack spacing={4} mt={10} textAlign="center">
          <Button colorScheme="teal" size="lg" as={Link} to="/predict" _hover={{ transform: 'scale(1.05)', transition: 'all 0.2s' }}>
            Get Started
          </Button>
          <Button variant="outline" colorScheme="teal" size="lg" as={Link} to="/about" _hover={{ transform: 'scale(1.05)', transition: 'all 0.2s' }}>
            Learn More
          </Button>
        </VStack>
      </Box>

      <Footer />
    </Flex>
  );
};

export default Home;
