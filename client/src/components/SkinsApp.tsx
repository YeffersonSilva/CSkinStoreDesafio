import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import {
  Box,
  Text,
  VStack,
  HStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Select,
  Button,
  SimpleGrid,
  Divider,
  useTheme,
  Container,
  Heading,
  Input,
  Flex,
  Badge,
  Skeleton
} from '@chakra-ui/react';
import { Search, Sliders } from 'lucide-react';

import SkinCard from './SkinCard';

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

const SkinsApp: React.FC = () => {
  const theme = useTheme();
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

    // Aplicar filtro de búsqueda
    if (searchTerm) {
      result = result.filter(skin => 
        skin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Aplicar filtro de categoría
    if (category) {
      result = result.filter(skin => skin.category === category);
    }

    // Aplicar filtro de precio
    result = result.filter(skin => 
      skin.price >= priceRange[0] && skin.price <= priceRange[1]
    );

    // Aplicar filtro de float
    result = result.filter(skin => 
      skin.float >= floatRange[0] && skin.float <= floatRange[1]
    );

    // Aplicar ordenamiento
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
    <Box bg={theme.colors.gray[50]} minH="100vh">
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center" color={theme.colors.orange[300]}>
            <Header />
          </Heading>

          <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
            <VStack spacing={6}>
              <Flex w="100%" gap={4}>
                <Input
                  placeholder="Pesquisar skins..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  size="lg"
                  flex={1}
                />
                <Button
                  leftIcon={<Search />}
                  onClick={applyFilters}
                  colorScheme="orange"
                  size="lg"
                  px={8}
                  _hover={{ bg: 'orange.300' }}
                >
                  Procurar
                </Button>
              </Flex>

              <Flex w="100%" gap={4} flexWrap={['wrap', 'nowrap']}>
                <Select
                  placeholder="Selecione a categoria"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  size="lg"
                  flex={1}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Select>

                <Select
                  placeholder="Ordenar por"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  size="lg"
                  flex={1}
                >
                  <option value="price">Preço</option>
                  <option value="float">Float</option>
                </Select>
              </Flex>

              <Box w="100%">
                <Text fontWeight="semibold" mb={2}>
                  Faixa de preço: ${priceRange[0]} - ${priceRange[1]}
                </Text>
                <RangeSlider
                  min={0}
                  max={10000}
                  step={100}
                  value={priceRange}
                  onChange={(val: [number, number]) => setPriceRange(val)}
                  colorScheme="orange"
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
              </Box>

              <Box w="100%">
                <Text fontWeight="semibold" mb={2}>
                  Faixa de Float: {floatRange[0].toFixed(2)} - {floatRange[1].toFixed(2)}
                </Text>
                <RangeSlider
                  min={0}
                  max={1}
                  step={0.01}
                  value={floatRange}
                  onChange={(val: [number, number]) => setFloatRange(val)}
                  colorScheme="orange"
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
              </Box>

              <Button
                leftIcon={<Sliders />}
                onClick={applyFilters}
                colorScheme="orange"
                size="lg"
                width="full"
              >
                Aplicar Filtros
              </Button>
            </VStack>
          </Box>

          <Box>
            <Flex justify="space-between" align="center" mb={4}>
              <Heading as="h2" size="lg">
                Resultados
              </Heading>
              <Badge colorScheme="orange" fontSize="md" p={2} borderRadius="md">
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
              <Text color="red.500" fontSize="lg" textAlign="center">
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
  );
};

export default SkinsApp;
