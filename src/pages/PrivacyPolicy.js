import React from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

const PrivacyPolicy = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={6}>
        Privacy Policy & Terms of Service
      </Heading>
      <VStack spacing={4} alignItems="flex-start">
        <Text fontSize="lg">Your privacy is important to us...</Text>
        <Text fontSize="lg">Terms of Service...</Text>
      </VStack>
    </Box>
  );
};

export default PrivacyPolicy;
