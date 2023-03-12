import React from 'react';
import Card from 'react-bootstrap/Card';
import Item from './item';
import { MenuItemType } from './types';

export const Sidebar = ({
    menu
}: {
    menu: MenuItemType[],
}): JSX.Element => (
    <Card
        as="nav"
        className="rounded-0"
        data-testid="sidebar-container"
    >
        <Card.Body as="ul" className="navigation-card p-0">
            {menu.map((el, key) => (
                <Item
                    key={key}
                    {...el}
                />
            ))}
        </Card.Body>
    </Card>
);
