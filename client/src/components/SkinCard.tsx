import React from 'react';
import { Box, Image, Text, VStack, Badge, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Skin {
  id: string;
  name: string;
  image: string;
  category: string;
  float: number;
  price: number;
}

interface SkinCardProps {
  skin: Skin;
}

const SkinCard: React.FC<SkinCardProps> = ({ skin }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        bg={bgColor}
        boxShadow="md"
        _hover={{ boxShadow: 'lg' }}
      >
        <Image src={skin.image} alt={skin.name} borderRadius="md" mb={4} />
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" fontSize="lg" color={textColor}>
            {skin.name}
          </Text>
          <Badge colorScheme="orange" fontSize="sm">
            ${skin.price.toFixed(2)}
          </Badge>
          <Text fontSize="sm" color={textColor}>
            Float: {skin.float.toFixed(4)}
          </Text>
          <Badge colorScheme="blue" fontSize="sm">
            {skin.category}
          </Badge>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default SkinCard;