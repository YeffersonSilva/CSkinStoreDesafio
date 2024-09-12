import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <Box bg="black" py={4}> {}
      <Flex as="header" align="center" justify="center" maxW="container.xl" mx="auto" px={4}>
        <Link href="/" passHref>
          <Image 
            src="https://pbs.twimg.com/profile_images/1721297694113599489/rzTCY03o_400x400.jpg" 
            alt="CS:GO Skins" 
            boxSize="50px" 
            mr={4} 
          />
        </Link>
        <Text fontSize="2xl" fontWeight="bold" color="white" textAlign="center">
          <span style={{ color: 'white' }}>CSKin </span>
          <span style={{ color: 'orange' }}>Store</span>
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
