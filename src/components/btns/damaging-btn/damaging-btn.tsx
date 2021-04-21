import React, {FC} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {LIFE} from '../../../constants/constans';
import {statsAction} from '../../../store/stats';
import style from '../btn.module.scss'

const DamagingBtn: FC = () => {
    const {item} = style;

    const dispatch = useDispatch();
    const stats = useSelector(((state: any) => state.stats));


    const handleClick = () => {
        const newValue = stats.items.find((s: any) => s.key === LIFE).valueOf;
        if (newValue > 0) {
            dispatch(statsAction.setHit({key: 'life', value: newValue - 1}));
        }
    }

    return (
        <button onClick={() => handleClick()} className={`btn btn-primary ${item}`}>
            <span>Урон</span>
        </button>
    )
};

export default DamagingBtn;
