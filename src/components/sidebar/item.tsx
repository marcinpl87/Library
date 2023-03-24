import React from 'react';
import Icon from './icon';
import { MenuItemType } from './types';

export default ({
    anchor,
    iconComp,
    linkComp
}: MenuItemType): JSX.Element => {
    const LinkComponent: React.FC = linkComp;
    return (
        <li className="navi-item">
            <LinkComponent>
                <span className="navi-icon">
                    <Icon component={iconComp} />
                </span>
                <span className="navi-text font-size-lg">
                    {anchor}
                </span>
            </LinkComponent>
        </li>
    );
};
