import React, {
    useState,
    useEffect,
} from 'react';

export const ScrollTop = ({
    offset,
    iconComp
}: {
    offset: number,
    iconComp: React.FC,
}): JSX.Element => {
    const Icon: React.FC = iconComp;
    const [
        showScroll,
        setShowScroll,
    ] = useState(false);
    useEffect(() => {
        window.addEventListener(
            'scroll',
            checkScrollTop
        );
        return () => {
            window.removeEventListener(
                'scroll',
                checkScrollTop
            );
        };
    });
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > offset) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= offset) {
            setShowScroll(false);
        }
    };
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div
            onClick={scrollTop}
            className="scrolltop"
            style={{
                display: showScroll
                    ? 'flex'
                    : 'none',
            }}
        >
            <Icon />
        </div>
    );
};
