import {
    render,
    fireEvent,
} from '@testing-library/react';
import { ScrollTop } from '../components/scroll-top';

describe('ScrollTop', () => {
    const mockIcon = vi.fn().mockImplementation(
        () => (<div />)
    );
    const offset = 200;
    let renderedScrollTop;

    beforeEach(() => {
        vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
        renderedScrollTop = render(
            <ScrollTop
                offset={offset}
                iconComp={mockIcon}
            />
        );
    });

    afterEach(() => {
        window.scrollTo.mockRestore();
    });

    it('by default is not displayed', () => {
        expect(renderedScrollTop.container.querySelector('.scrolltop')).toHaveStyle('display: none');
    });

    it('renders the icon', () => {
        expect(mockIcon).toHaveBeenCalled();
    });

    it('is visible when window.pageYOffset is greater than offset', () => {
        window.pageYOffset = offset + 1;
        fireEvent.scroll(window);
        expect(renderedScrollTop.container.querySelector('.scrolltop')).toHaveStyle('display: flex');
    });

    it('is not visible when window.pageYOffset equal to offset', () => {
        window.pageYOffset = offset;
        fireEvent.scroll(window);
        expect(renderedScrollTop.container.querySelector('.scrolltop')).toHaveStyle('display: none');
    });

    it('is not visible when window.pageYOffset is less than offset', () => {
        window.pageYOffset = offset - 1;
        fireEvent.scroll(window);
        expect(renderedScrollTop.container.querySelector('.scrolltop')).toHaveStyle('display: none');
    });

    it('is not visible when page is scrolled to the top', () => {
        window.pageYOffset = 0;
        fireEvent.scroll(window);
        expect(renderedScrollTop.container.querySelector('.scrolltop')).toHaveStyle('display: none');
    });

    it('calls window.scrollTo when clicked', () => {
        fireEvent.click(renderedScrollTop.container.querySelector('.scrolltop'));
        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth',
        });
    });
});
