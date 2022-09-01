import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import ButtonComponent from './ButtonComponent';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('should render a button with the class of button', () => {
  render(<ButtonComponent />);
});

it('button is clickable', () => {
  render(<ButtonComponent />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
});
