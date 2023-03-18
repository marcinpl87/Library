import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { Sidebar } from '../sidebar';
import Item from '../sidebar/item';

const mockLink = vi.fn().mockImplementation(
    ({children}) => (<span>{children}</span>)
);
const mockIcon = vi.fn().mockImplementation(
    () => (<div />)
);

describe('Sidebar', () => {
    let sidebarContainer;
    const randomString = (Math.random() + 1).toString(36).substring(2);

    beforeEach(() => {
        sidebarContainer = render(
            <Sidebar
                menu={[
                    {
                        anchor: randomString,
                        iconComp: mockIcon,
                        linkComp: mockLink,
                    },
                ]}
            />
        );
    });

    it('renders the Sidebar component', () => {
        expect(sidebarContainer.getByTestId('sidebar-container')).toBeInTheDocument();
    });

    it('item renders the link', () => {
        expect(mockLink).toHaveBeenCalled();
    });

    it('item renders the icon', () => {
        expect(mockIcon).toHaveBeenCalled();
    });

    it('item renders link anchor', () => {
        expect(sidebarContainer.getByText(randomString)).toBeInTheDocument();
    });
});
