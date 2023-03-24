import { render } from '@testing-library/react';
import { Layout } from '../components/layout';

const mockSidebar = vi.fn().mockImplementation(() => (<div />));

describe('Layout', () => {
    const randomString = (Math.random() + 1).toString(36).substring(2);
    let layoutContainer;

    beforeEach(() => {
        layoutContainer = render(
            <Layout sidebar={mockSidebar} menu={[]}>
                <h1>{randomString}</h1>
            </Layout>
        );
    });

    it('renders the Layout component', () => {
        expect(layoutContainer.getByTestId('layout-container')).toBeInTheDocument();
    });

    it('renders children components', () => {
        expect(layoutContainer.getByText(randomString)).toBeInTheDocument();
    });

    it('renders sidebar with menu configuration', () => {
        expect(mockSidebar).toHaveBeenCalled();
    });
});
