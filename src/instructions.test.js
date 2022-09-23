import { render } from '@testing-library/react';

import Instructions from './routes/Instructions';

test('it renders without crashing', () => {
    render(<Instructions />);
})
