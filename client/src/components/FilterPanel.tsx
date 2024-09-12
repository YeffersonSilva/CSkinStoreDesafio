import React from 'react';
import {
  VStack,
  Input,
  Select,
  Text,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';
import { Search, Sliders } from 'lucide-react';

interface FilterPanelProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  floatRange: [number, number];
  setFloatRange: (value: [number, number]) => void;
  applyFilters: () => void;
  categories: string[];
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  sortBy,
  setSortBy,
  priceRange,
  setPriceRange,
  floatRange,
  setFloatRange,
  applyFilters,
  categories,
}) => {
  return (
    <VStack spacing={6} align="stretch" bg="white" p={6} borderRadius="lg" boxShadow="md">
      <Flex gap={4}>
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
          _hover={{ bg: 'orange.500' }}
        >
          Procurar
        </Button>
      </Flex>

      <Flex gap={4} flexWrap={['wrap', 'nowrap']}>
        <Select
          placeholder="Selecione a categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          size="lg"
          flex={1}
        >
          {categories.map((cat) => (
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

      <Box>
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

      <Box>
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
  );
};

export default FilterPanel;