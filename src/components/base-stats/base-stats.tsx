import React, {FC} from 'react';
import Card from '../card/card';

import styles from './base-stats.module.scss';
import {useSelector} from 'react-redux';

const BaseStats: FC = () => {
    const {items, item, danger} = styles;
    const stats = useSelector((state: any)=> state.stats);

    return (
        <div>
            <Card>
                <ul className={items}>
                    {stats.items.map((s: { stat: string, value: number, valueOf?: any }, idx: number) =>
                        <li className={item} key={idx}>
                            <div>{s.stat}</div>
                            <div>
                                {s.value}
                                {s.valueOf >= 0 && <span>/<span className={danger}>{s.valueOf}</span></span>}
                            </div>
                        </li>
                    )}
                </ul>
            </Card>
        </div>
    );
};

export default BaseStats;