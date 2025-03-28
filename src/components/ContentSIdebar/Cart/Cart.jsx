import HeaderSidebar from '@components/ContentSIdebar/components/HeaderSidebar/HeaderSidebar';
import style from './styles.module.scss';

import React, { useContext } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import ItemProduct from '@components/ContentSIdebar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { SidebarContext } from '@/contexts/Sidebar';
import cls from "classnames"
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const { listData = [], setIsOpen } = useContext(SidebarContext);
    console.log('listData:', listData);
    const navigate = useNavigate();

    const handleReturnShop = () => {
        navigate("/shop");
        setIsOpen(false);
    }
    const totalPrice = listData.reduce((acc, item) => {
        return acc + item.total;
    }, 0)
    return (
        <div className={cls(style.container, {
            [style.isEmpty]: !listData.length
        })}>
            <HeaderSidebar icon={<CiShoppingCart />} title={'Cart'} />
            {listData.length ? (
                <div className={style.flex}>
                    <div>
                        {listData?.map((item) => {
                            return (
                                <ItemProduct
                                    key={item}
                                    src={item.images[1]}
                                    nameProduct={item.name}
                                    priceProduct={item.price}
                                    skuProduct={item.sku}
                                    sizeProduct={item.sizeProduct}
                                    quantity={item.quantity}
                                    productId={item.productId}
                                    userId={item.userId}
                                />
                            );
                        })}
                    </div>
                    <div>
                        <div className={style.total}>
                            <p>SUBTOTAL</p>
                            <p>{totalPrice}</p>
                        </div>
                        <div className={style.button}>
                            <Button content={'VIEW WISHLIST'} />
                            <Button content={'ADD ALL TO CART'} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className={style.empty}>
                    <div className={style.empty}>NO PRODUCTS IN THE CART</div>
                    <div ><Button content={"Return to Shop"} onClick={handleReturnShop}/></div>
                </div>
            )}
        </div>
    );
};

export default Cart;
