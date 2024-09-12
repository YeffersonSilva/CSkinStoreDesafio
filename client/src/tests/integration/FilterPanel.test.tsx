import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import '@testing-library/jest-dom'; 
describe('FilterPanel Integration Tests', () => {
  const mockProps = {
    searchTerm: '',
    setSearchTerm: jest.fn(),
    category: '',
    setCategory: jest.fn(),
    sortBy: 'price',
    setSortBy: jest.fn(),
    priceRange: [0, 10000] as [number, number],  // Asegúrate de que es una tupla
    setPriceRange: jest.fn(),
    floatRange: [0, 1] as [number, number],  // Asegúrate de que es una tupla
    setFloatRange: jest.fn(),
    applyFilters: jest.fn(),
    categories: ['Rifle', 'Pistol', 'Knife'],
  };
  

  test('renders all filter controls', () => {
    render(<FilterPanel {...mockProps} />);
    
    expect(screen.getByPlaceholderText('Pesquisar skins...')).toBeInTheDocument();
    expect(screen.getByText('Selecione a categoria')).toBeInTheDocument();
    expect(screen.getByText('Ordenar por')).toBeInTheDocument();
    expect(screen.getByText('Faixa de preço: $0 - $10000')).toBeInTheDocument();
    expect(screen.getByText('Faixa de Float: 0.00 - 1.00')).toBeInTheDocument();
    expect(screen.getByText('Aplicar Filtros')).toBeInTheDocument();
  });

  test('calls setSearchTerm when typing in search input', () => {
    render(<FilterPanel {...mockProps} />);
    
    const searchInput = screen.getByPlaceholderText('Pesquisar skins...');
    userEvent.type(searchInput, 'AK-47');
    
    expect(mockProps.setSearchTerm).toHaveBeenCalledWith('AK-47');
  });

  test('calls setCategory when selecting a category', () => {
    render(<FilterPanel {...mockProps} />);
    
    const categorySelect = screen.getByText('Selecione a categoria');
    fireEvent.change(categorySelect, { target: { value: 'Rifle' } });
    
    expect(mockProps.setCategory).toHaveBeenCalledWith('Rifle');
  });

  test('calls applyFilters when clicking the apply button', () => {
    render(<FilterPanel {...mockProps} />);
    
    const applyButton = screen.getByText('Aplicar Filtros');
    userEvent.click(applyButton);
    
    expect(mockProps.applyFilters).toHaveBeenCalled();
  });

  // Aqui puedes agregar más pruebas para otras interacciones como cambiar el rango de precios, float, etc.
});