import React from 'react';
import style from './styles.module.scss';
import { MdClose } from 'react-icons/md';
const ItemProduct = () => {
    return (
        <div className={style.container}>
            <img src='' />
            <div className={style.close}>
                <MdClose />
            </div>
            <div className={style.box}>
                <div>Title PRoduct</div>
                <div>SIze: M</div>
                <div>1 x $199.99</div>
                <div>SKU: 12349</div>
                <div>$120.0</div>
            </div>
        </div>
    );
};

export default ItemProduct;
