import React from 'react';
import Character from '../../components/character/character';
import NameBar from '../../components/name-bar/name-bar';

import styles from './img-layout.module.scss';
import StatsLayout from '../../components/stats-layout/stats-layout';

const ImgLayouts = () => {
    const {wrap} = styles;

    return (
        <div>
            <div className={wrap}>
                <NameBar/>
                <Character/>
                <StatsLayout/>
            </div>
        </div>
    );
};

export default ImgLayouts;