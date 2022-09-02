import { fireEvent, render, screen } from '@testing-library/react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import ButtonComponent from './ButtonComponent';

// app.test.js
it('navigates home when you click the home link', () => {
  const root = document.createElement('div');
  document.body.appendChild(root);

  // Render app
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
    root
  );

  // Interact with page
  act(() => {
    // Find the link
    const goHomeLink = document.querySelector('#home-link');
    // Click it
    goHomeLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  // Check correct page content showed up
  expect(document.body.textContent).toBe('Home | Instructions | About');
});

it('should render a button with the class of button', () => {
  render(<ButtonComponent />);
});

it('button is clickable', () => {
  render(<ButtonComponent />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
});
