import React from 'react';

export default ({
    component,
    ...props
}: {
    component: React.FC,
    [key: string]: any,
}): JSX.Element => {
    const IconComponent: React.FC = component;
    return <IconComponent {...props} />
};
