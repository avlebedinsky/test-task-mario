import React from 'react';

import './main-layout.scss';

const MainLayout = (props: { children: any }) => {
    let {children} = props;
    return (
        <div className="main">
            <div className="inner">
                {children}
            </div>
        </div>
    );
}

export default MainLayout;