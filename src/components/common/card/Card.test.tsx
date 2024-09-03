/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './Card';
import { describe, it, expect, vi } from 'vitest';

// Crear un mock para la función navigate
const mockNavigate = vi.fn();

// No es necesario hacer mock de BrowserRouter. Simplemente mockear useNavigate.
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal() as any
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('Card component', () => {
  it('should call navigate with the correct path when image is clicked', () => {
    const props = {
      picture: 'image_url',
      price: '$10',
      title: 'Test Product',
      id: '123',
    };

    // Renderizar el componente con Router
    render(
      <Router>
        <Card {...props} />
      </Router>
    );

    // Simular el clic en la imagen
    fireEvent.click(screen.getByAltText('Test Product')); // Cambiado a getByAltText

    // Verificar que navigate ha sido llamado con la ruta correcta
    expect(mockNavigate).toHaveBeenCalledWith(`/item/${props.id}`);
  });

  it('should render the card with correct information', () => {
    const props = {
      picture: 'image_url',
      price: '$10',
      title: 'Test Product',
      id: '123',
    };

    render(
      <Router>
        <Card {...props} />
      </Router>
    )
    const image = screen.getByAltText('Test Product');

    expect(screen.getByText('Test Product')).toBeInTheDocument();

    
    expect(image).toHaveAttribute('src', 'image_url');

    expect(screen.getByText('$10')).toBeInTheDocument();

    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('should not call navigate if the image is not clicked', () => {
    const props = {
      picture: 'image_url',
      price: '$10',
      title: 'Test Product',
      id: '123',
    };
  
    render(
      <Router>
        <Card {...props} />
      </Router>
    );
  
    // Verifica que navigate no haya sido llamado
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
