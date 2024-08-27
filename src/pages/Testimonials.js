import React from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

const Testimonials = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={6}>
        Testimonials
      </Heading>
      <VStack spacing={4} alignItems="flex-start">
        <Text fontSize="lg">"This tool is amazing!" - User A</Text>
        <Text fontSize="lg">"It helped me detect an issue early." - User B</Text>
      </VStack>
    </Box>
  );
};

export default Testimonials;
