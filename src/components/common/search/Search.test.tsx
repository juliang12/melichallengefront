import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Search from './Search';


// Crear mocks para el hook useSearch
const mockHandleSearch = vi.fn();
const mockHandleSubmit = vi.fn();

vi.mock('../../../hooks/useSearch', () => ({
  __esModule: true,
  default: () => ({
    searchValue: '',
    handleSearch: mockHandleSearch,
    handleSubmit: mockHandleSubmit,
  }),
}));

describe('Search component', () => {
  it('should render the component with search input and icon', () => {
    render(<Search />);

    // Verificar que el campo de búsqueda está en el documento
    expect(screen.getByPlaceholderText('Nunca dejes de buscar')).toBeInTheDocument();
    
    // Verificar que el botón de búsqueda con el icono está en el documento
    expect(screen.getByAltText('icon')).toBeInTheDocument();
  });

  it('should call handleSearch when the input value changes', () => {
    render(<Search />);

    // Simular el cambio en el campo de búsqueda
    fireEvent.change(screen.getByPlaceholderText('Nunca dejes de buscar'), {
      target: { value: 'search term' },
    });

    // Verificar que handleSearch ha sido llamado
    expect(mockHandleSearch).toHaveBeenCalled();
  });

  it('should call handleSubmit when the form is submitted', () => {
    render(<Search />);
    
    // Simular el envío del formulario
    fireEvent.submit(screen.getByTestId('search-form'));

    // Verificar que handleSubmit ha sido llamado
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  it('should render the icon correctly', () => {
    render(<Search />);

    // Verificar que el icono de búsqueda se renderiza correctamente
    const icon = screen.getByAltText('icon');
    expect(icon).toHaveAttribute('src', expect.stringContaining('ic_Search.png'));
  });
});
