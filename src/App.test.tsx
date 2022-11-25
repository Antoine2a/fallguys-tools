import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

// TEMPLATE UNIT TEST
describe('App', () => {
    it('Renders hello world', () => {
        // ARRANGE (get our unit test setup)
        render(<WrappedApp />);
        // ACT (do the thing that the user would do with the specific component) [opt]
        // example: click a button of fill up an input
        // EXPECT (check to see that after the user interacted with the page, we have the expect outcome)
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Hello World!');
    });
    it('Renders not found if invalid path', () => {
        render(
            <MemoryRouter initialEntries={['/this-route-doest-not-exist']}>
                <App />
            </MemoryRouter>
        );
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Not Found!');
    });
});
