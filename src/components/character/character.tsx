import React, {FC} from 'react';

import styles from './character.module.scss';

import mario from '../../img/mario.png';
import light from '../../img/light.png';

const Character: FC = () => {
    const {
        wrap,
        position,
        shadow,
        avatar,
    } = styles;

    return (
        <div className={wrap}>
            <div className={[position, shadow].join(' ')}/>
            <div className={position}>
                <img className={position} style={{zIndex: 2}} src={light} alt=""/>
                <img className={[position, avatar].join(' ')} src={mario} alt=""/>
            </div>
        </div>
    );
};

export default Character;