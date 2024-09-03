import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';
import useSWR from 'swr';

// Mock de useSWR para manejar diferentes estados
vi.mock('swr', () => ({
  __esModule: true,
  default: (key: string, fetcher: any) => {
    // Aquí puedes definir los datos según el valor de `key`
    if (key === 'loading') {
      return {
        data: null,
        isLoading: true,
      };
    }
    if (key === 'loaded') {
      return {
        data: {
          id: '1',
          picture: 'http://example.com/image.jpg',
          condition: 'new',
          soldQuantity: 10,
          title: 'Test Product',
          price: '$100',
          description: 'This is a test product.',
          categoryId: '123'
        },
        isLoading: false,
      };
    }
    return { data: null, isLoading: true };
  }
}));

describe('ProductDetailPage', () => {
  it('shows loader while loading', async () => {
    // Configura el mock para el estado de carga
    vi.mocked(useSWR).mockImplementation((key: string) => {
      if (key === 'loading') {
        return {
          data: null,
          isLoading: true,
        };
      }
      return {
        data: null,
        isLoading: false,
      };
    });

    render(
      <Router>
        <ProductDetailPage />
      </Router>
    );

    // Verifica que el spinner está presente usando data-testid
    await waitFor(() => {
      expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });
  });

  it('renders product details correctly after loading', async () => {
    // Configura el mock para el estado cargado
    vi.mocked(useSWR).mockImplementation((key: string) => {
      if (key === 'loaded') {
        return {
          data: {
            id: '1',
            picture: 'http://example.com/image.jpg',
            condition: 'new',
            soldQuantity: 10,
            title: 'Test Product',
            price: '$100',
            description: 'This is a test product.',
            categoryId: '123'
          },
          isLoading: false,
        };
      }
      return { data: null, isLoading: true };
    });

    // Renderiza el componente en el estado de datos cargados
    render(
      <Router>
        <ProductDetailPage />
      </Router>
    );

    // Verifica que el contenido se muestra después de que los datos han cargado
    await waitFor(() => {
      expect(screen.getByText('Nuevo - 10 vendidos')).toBeInTheDocument();
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('$100')).toBeInTheDocument();
      expect(screen.getByText('This is a test product.')).toBeInTheDocument();
      expect(screen.getByRole('img')).toHaveAttribute('src', 'http://example.com/image.jpg');
    });
  });
});
