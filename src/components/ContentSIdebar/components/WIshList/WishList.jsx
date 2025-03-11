import React from 'react';
import style from './styles.module.scss';
import HeaderSidebar from '@components/ContentSIdebar/components/HeaderSidebar/HeaderSidebar';
import { CiHeart } from 'react-icons/ci';
import ItemProduct from '@components/ContentSIdebar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

const WishList = () => {
    return (
        <div className={style.container}>
            <div>
                <HeaderSidebar icon={<CiHeart />} title={'Wish List'} />

                <ItemProduct />
            </div>
            <div>
                <Button content={"VIEW WISHLIST"}/>
                <Button content={"ADD ALL TO CART"}/>
            </div>
        </div>
    );
};

export default WishList;
