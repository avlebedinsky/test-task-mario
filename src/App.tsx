import React, {FC} from 'react';
import './App.scss';
import MainLayout from './layouts/main-layout/main-layout';
import ImgLayouts from './layouts/img-layout/img-layouts';
import BaseStats from './components/base-stats/base-stats';
import Skills from './components/skills/skills';
import BtnLayout from './components/btn-layout/btn-layout';
import {Provider} from 'react-redux';
import {store} from './store';


const App: FC = () => {
    return (
        <Provider store={store}>
            <MainLayout>
                <div className="section-main">
                    <ImgLayouts/>
                    <BaseStats/>
                </div>
                <Skills/>
                <BtnLayout/>
            </MainLayout>
        </Provider>
    );
};

export default App;
