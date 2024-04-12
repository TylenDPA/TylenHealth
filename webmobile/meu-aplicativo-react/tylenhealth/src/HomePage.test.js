import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders homepage title', () => {
  render(<HomePage />);
  const titleElement = screen.getByText(/Página Inicial/i);
  expect(titleElement).toBeInTheDocument();
});

// Adicione mais testes conforme necessário
