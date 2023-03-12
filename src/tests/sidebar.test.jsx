import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Item from '../sidebar/item';

describe('Sidebar', () => {
    it('item renders link anchor', () => {
        const randomString = (Math.random() + 1).toString(36).substring(2);
        const result = render(
            <HashRouter>
                <Item
                    anchor={randomString}
                    iconComp={() => (<div />)}
                    linkComp={({children}) => (<span>{children}</span>)}
                />
            </HashRouter>
        );

        expect(result.getByText(randomString)).toBeInTheDocument();
    });
});
