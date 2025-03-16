import React from 'react';
import style from '../styles.module.scss';
import Button from '@components/Button/Button';

const Banner = () => {
    return (
        <div className={style.containerBanner}>
            <div className={style.desc}>
                <p className={style.title}>The classics make a comeback</p>
                <Button content='Buy Now' />
            </div>
        </div>
    );
};

export default Banner;
