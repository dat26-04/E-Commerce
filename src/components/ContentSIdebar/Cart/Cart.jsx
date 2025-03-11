import HeaderSidebar from '@components/ContentSIdebar/components/HeaderSidebar/HeaderSidebar';
import style from './styles.module.scss';

import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import ItemProduct from '@components/ContentSIdebar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

const Cart = () => {
    return (
        <div className={style.container}>
            <div>
                <HeaderSidebar icon={<CiShoppingCart />} title={'Cart'} />

                <ItemProduct />
            </div>
            <div>
                <div className={style.total}>
                    <p>SUBTOTAL</p>
                    <p>$199.99</p>
                </div>
                <div>
                    <Button content={'VIEW WISHLIST'} />
                    <Button content={'ADD ALL TO CART'} />
                </div>
            </div>
        </div>
    );
};

export default Cart;
