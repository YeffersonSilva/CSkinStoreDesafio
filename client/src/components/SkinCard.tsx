import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';

interface Skin {
  id: string;
  name: string;
  image: string;
  category: string;
  float: string;
  price: number;
}

interface SkinCardProps {
  skin: Skin;
}

const SkinCard: React.FC<SkinCardProps> = ({ skin }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Image src={skin.image} alt={skin.name} />
    <VStack align="start" mt={2}>
      <Text fontWeight="bold">{skin.name}</Text>
      <Text>Price: ${skin.price}</Text>
      <Text>Float: {skin.float}</Text>
      <Text>Category: {skin.category}</Text>
    </VStack>
  </Box>
);

export default SkinCard;