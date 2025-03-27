import React from 'react';
import style from './styles.module.scss';
import { MdClose } from 'react-icons/md';
const ItemProduct = ({ src, nameProduct, skuProduct, priceProduct, sizeProduct, quantity }) => {
    return (
        <div className={style.container}>
            <img src={src} />
            <div className={style.close}>
                <MdClose />
            </div>
            <div className={style.box}>
                <div>{nameProduct}</div>
                <div>Size: {sizeProduct}</div>
                <div>{quantity} x {priceProduct}</div>
                <div>SKU: {skuProduct}</div>
                {/* <div>{priceProduct}</div> */}
            </div>
        </div>
    );
};

export default ItemProduct;
