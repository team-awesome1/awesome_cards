import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

it('contains the proper text within', () => {
  const root = document.createElement('div');
  document.body.appendChild(root);

  // Render app
  render(
    <MemoryRouter initialEntries={['/About']}>
      <App />
    </MemoryRouter>,
    root
  );

  // Interact with page
  act(() => {
    // Find the link
    const goAboutLink = document.querySelector('#about-link');
    // Ensure that link has proper text
    console.log('About link text: ', goAboutLink.textContent)

  });

  // Check correct page content showed up
  const linkText = document.getElementById('about-link').innerHTML;
  expect(linkText).toBe('About');
});
