import React from 'react';

import styles from './card.module.scss';

const Card = (props: { children: any }) => {
    let {children} = props;
    const {card} = styles
    return (
        <div className={card}>
            <div>{children}</div>
        </div>
    );
}

export default Card;