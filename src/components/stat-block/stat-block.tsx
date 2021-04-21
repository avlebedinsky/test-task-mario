import React, {FC} from 'react';
import {IStat} from '../../interface/interface';
import style from './stat-block.module.scss';
import '../../scss/comon.scss';
import {useDispatch, useSelector} from 'react-redux';
import {mainParametersAction} from '../../store/main-parameters';
import {statsAction} from '../../store/stats';
import {EVASION, LIFE, VITALITY} from '../../constants/constans';
import {getMainParameterValue} from '../../helpers/helpers';

const StatBlock: FC<{ stat: IStat }> = ({stat}) => {
    const {
        item,
        wrap,
        substrate,
        'value-wrap': valueWrap,
        'value-title': valueTitle,
        score,
    } = style

    const dispatch = useDispatch();

    const {parameters} = useSelector((state:any ) => state.mainParameters);

    const setStat = (key: string, value: number) => {
        dispatch(statsAction.setStat({key, value}))
    };

    const changeValue = (value: any) => {
        if(value >= 0) {
            switch (stat.shortName){
                case 'AG':
                    setStat(EVASION, value + 10);
                    break;
                case 'ST':
                    setStat(LIFE, value + 3);
                    dispatch(statsAction.setHit({key: 'life', value: value + 3}));
                    break;
                case 'IN':
                    const ch = getMainParameterValue(parameters, 'CH');
                    setStat(VITALITY, value + ch);
                    break;
                case 'CH':
                    const int = getMainParameterValue(parameters, 'IN');
                    setStat(VITALITY, value + int);
                    break;

            }
            dispatch(mainParametersAction.setValue({...stat, value}));
            return
        }
    }

    return (
        <div className={[item, stat.type].join(' ')}>
            <div className="title">{stat.name}</div>
            <div className={valueWrap}>
                <div className={valueTitle}>{stat.shortName}</div>
                <div className={[substrate, 'substrate'].join(' ')}/>
            </div>
            <div className={score}>{stat.value}</div>
            <div className={wrap}>
                <button className="btn btn-primary"
                        onClick={() => changeValue(stat.value +1)}>+</button>
                <button className="btn btn-danger"
                        onClick={() => changeValue(stat.value - 1)}>-</button>
            </div>
        </div>
    );
};


export default StatBlock;

