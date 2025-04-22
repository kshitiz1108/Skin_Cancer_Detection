import React from 'react';
import { Box, Heading, Text, VStack, HStack, Image, Divider } from '@chakra-ui/react';
import skinCancerData from '../data';

const SkinCancerInfo = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="xl" mb={6}>
        Skin Cancer Information
      </Heading>

      <HStack overflowX="scroll" spacing={4} mb={10} p={2}>
        {skinCancerData.map((cancer) => (
          <Box key={cancer.id} minW="200px" boxShadow="lg" borderRadius="md" p={3}>
            <Image src={`../assets/${cancer.id}.png`} alt={cancer.name} borderRadius="md" />
            <Text mt={2} fontWeight="bold">{cancer.name}</Text>
          </Box>
        ))}
      </HStack>

      <VStack spacing={8} alignItems="flex-start">
        {skinCancerData.map((cancer) => (
          <Box key={cancer.id} textAlign="left" p={4} boxShadow="md" borderRadius="md" w="full">
            <Heading as="h2" size="lg" mb={4}>
              {cancer.name}
            </Heading>
            <Text fontSize="md" mb={2}>
              <strong>Description:</strong> {cancer.description}
            </Text>
            <Text fontSize="md" mb={2}>
              <strong>Early Signs:</strong> {cancer.earlySigns}
            </Text>
            <Text fontSize="md">
              <strong>Prevention Tips:</strong> {cancer.preventionTips}
            </Text>
            <Divider mt={4} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default SkinCancerInfo;
