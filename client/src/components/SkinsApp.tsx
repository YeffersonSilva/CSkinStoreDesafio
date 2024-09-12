import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  VStack,
  Container,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
  Flex,
  Badge,
  useTheme,
  ColorModeScript,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import FilterPanel from './FilterPanel';
import SkinCard from './SkinCard';
import Header from './Header';

interface Skin {
  id: string;
  name: string;
  image: string;
  category: string;
  float: number;
  price: number;
}

const CATEGORIES = ['Rifle', 'Pistol', 'Knife', 'SMG', 'Shotgun', 'Sniper Rifle'];
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      50: '#f7fafc',
      // ... other shades
      900: '#171923',
    },
    orange: {
      50: '#fffaf0',
      // ... other shades
      500: '#ed8936',
    },
  },
});

const SkinsApp: React.FC = () => {
  const [skins, setSkins] = useState<Skin[]>([]);
  const [filteredSkins, setFilteredSkins] = useState<Skin[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [floatRange, setFloatRange] = useState<[number, number]>([0, 1]);
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSkins = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/items`);
      if (!response.ok) {
        throw new Error('Failed to fetch skins');
      }
      const data = await response.json();
      setSkins(data);
      setFilteredSkins(data);
    } catch (err) {
      setError('Error fetching skins from API');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSkins();
  }, [fetchSkins]);

  const applyFilters = useCallback(() => {
    let result = skins;

    if (searchTerm) {
      result = result.filter(skin => 
        skin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      result = result.filter(skin => skin.category === category);
    }

    result = result.filter(skin => 
      skin.price >= priceRange[0] && skin.price <= priceRange[1]
    );

    result = result.filter(skin => 
      skin.float >= floatRange[0] && skin.float <= floatRange[1]
    );

    result.sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'float') {
        return a.float - b.float;
      }
      return 0;
    });

    setFilteredSkins(result);
  }, [skins, searchTerm, category, priceRange, floatRange, sortBy]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Box bg="black" minH="100vh" color="white">
        <Container maxW="container.xl" py={8}>
          <VStack spacing={8} align="stretch">
            <Heading as="h1" size="2xl" textAlign="center" color="orange.400">
              <Header />
            </Heading>

            <FilterPanel
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              category={category}
              setCategory={setCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              floatRange={floatRange}
              setFloatRange={setFloatRange}
              applyFilters={applyFilters}
              categories={CATEGORIES}
            />

            <Box>
              <Flex justify="space-between" align="center" mb={4}>
                <Heading as="h2" size="lg" color="orange.300">
                  Resultados
                </Heading>
                <Badge colorScheme="white" fontSize="md" p={2} borderRadius="md">
                  {filteredSkins.length} itens encontrados
                </Badge>
              </Flex>
              
              {loading ? (
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
                  {[...Array(4)].map((_, index) => (
                    <Skeleton key={index} height="300px" borderRadius="lg" />
                  ))}
                </SimpleGrid>
              ) : error ? (
                <Text color="red.400" fontSize="lg" textAlign="center">
                  Error: {error}
                </Text>
              ) : (
                <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
                  {filteredSkins.map((skin) => (
                    <SkinCard key={skin.id} skin={skin} />
                  ))}
                </SimpleGrid>
              )}
            </Box>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default SkinsApp;