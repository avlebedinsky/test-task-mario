import React, {FC} from 'react';

import style from './btn-layout.module.scss'
import LevelingBtn from '../btns/leveling-btn/leveling-btn';
import DamagingBtn from '../btns/damaging-btn/damaging-btn';
import FileLoader from '../btns/file-loader/file-loader';
import FileKeeper from '../btns/file-keeper/file-keeper';

const BtnLayout: FC = () => {
    const {
        wrap,
        group,
    } = style

    return (
        <div className={[wrap, group].join(' ')}>
            <div className={group}>
                <LevelingBtn/>
                <DamagingBtn/>

            </div>
            <div className={group}>
                <FileLoader/>
                <FileKeeper/>
            </div>
        </div>
    );
};

export default BtnLayout;