import React from 'react';
import StatBlock from '../stat-block/stat-block';

import style from './stats-layout.module.scss';
import {useSelector} from 'react-redux';

const StatsLayout = () => {
    const {wrap} = style;
    const {parameters} = useSelector((state:any ) => state.mainParameters);

    return (
        <div className={wrap}>
            {parameters.map(((s: any) => <StatBlock key={s.shortName} stat={s}/>))}
        </div>
    );
};

export default StatsLayout;
