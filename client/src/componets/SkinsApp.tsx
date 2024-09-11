import React, { useState, useEffect } from 'react';
import {
  Box,
  Input,
  Select,
  Button,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import SkinCard from './SkinCard';

interface Skin {
  id: number;
  image: string;
  name: string;
  price: number;
  float: number;
  category: string;
}

const CATEGORIES = ['Knife', 'Pistol', 'Rifle', 'SMG', 'Shotgun', 'Sniper Rifle'];

const SkinsApp: React.FC = () => {
  const [skins, setSkins] = useState<Skin[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [floatRange, setFloatRange] = useState<[number, number]>([0, 1]);
  const [category, setCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');

  useEffect(() => {
    fetchSkins();
  }, [searchTerm, priceRange, floatRange, category, sortBy]);

  const fetchSkins = async () => {
    try {
      const params = new URLSearchParams({
        search: searchTerm,
        minPrice: priceRange[0].toString(),
        maxPrice: priceRange[1].toString(),
        minFloat: floatRange[0].toString(),
        maxFloat: floatRange[1].toString(),
        category: category,
        sortBy: sortBy,
      });
      
      const response = await fetch(`http://localhost:3000/items?${params}`);
      const data = await response.json();
      setSkins(data);
    } catch (error) {
      console.error('Error fetching skins:', error);
    }
  };

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Input
          placeholder="Search skins..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <HStack>
          <Select
            placeholder="Select category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Select>
          
          <Select
            placeholder="Sort by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="price">Price</option>
            <option value="float">Float</option>
          </Select>
        </HStack>
        
        <Box>
          <Text>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
          <RangeSlider
            min={0}
            max={1000}
            step={10}
            value={priceRange}
            onChange={(val) => setPriceRange(val as [number, number])}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </Box>
        
        <Box>
          <Text>Float Range: {floatRange[0]} - {floatRange[1]}</Text>
          <RangeSlider
            min={0}
            max={1}
            step={0.01}
            value={floatRange}
            onChange={(val) => setFloatRange(val as [number, number])}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </Box>
        
        <Button onClick={fetchSkins}>Apply Filters</Button>
      </VStack>
      
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={4} mt={8}>
        {skins.map((skin) => (
          <SkinCard key={skin.id} skin={skin} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkinsApp;
