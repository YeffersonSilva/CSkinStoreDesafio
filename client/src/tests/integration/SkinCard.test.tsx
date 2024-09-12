import React from 'react';
import { render, screen } from '@testing-library/react';
import SkinCard from '../../components/SkinCard/SkinCard';

describe('SkinCard Integration Tests', () => {
  const mockSkin = {
    id: '1',
    name: 'AK-47 | Redline',
    image: 'ak47.png',
    category: 'Rifle',
    float: 0.15,
    price: 50,
  };

  test('renders skin information correctly', () => {
    render(<SkinCard skin={mockSkin} />);
    
    expect(screen.getByText('AK-47 | Redline')).toBeInTheDocument();
    expect(screen.getByText('$50.00')).toBeInTheDocument();
    expect(screen.getByText('Float: 0.1500')).toBeInTheDocument();
    expect(screen.getByText('Rifle')).toBeInTheDocument();
    expect(screen.getByAltText('AK-47 | Redline')).toHaveAttribute('src', 'ak47.png');
  });
});