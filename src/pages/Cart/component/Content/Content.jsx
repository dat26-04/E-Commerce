import React, { useContext } from 'react';
import style from '../../styles.module.scss';
import CartTable from '@pages/Cart/component/Content/CartTable';
import CartPrice from '@pages/Cart/component/Content/CartPrice';
import { SidebarContext } from '@/contexts/Sidebar';

const Content = () => {
    const { listData } = useContext(SidebarContext);
    console.log(listData);
    return (
        <div className={style.containerForContent}>
            <div>
                <CartTable listData={listData}/>
            </div>
            <div>
                <CartPrice />
            </div>
        </div>
    );
};

export default Content;
