import Header from '@components/Header/Header';
import React from 'react';
import Content from '@pages/Cart/component/Content/Content';
import Steps from '@pages/Cart/component/Steps/Steps';
import Footer from '@components/Footer/Footer';
import style from './styles.module.scss';

const Cart = () => {
    return (
        <>
            <Header />
            <div className={style.container}>
                <Steps />
                <Content />
            </div>
            <Footer />
        </>
    );
};

export default Cart;
