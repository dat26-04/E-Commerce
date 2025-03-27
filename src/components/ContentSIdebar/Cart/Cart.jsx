import HeaderSidebar from '@components/ContentSIdebar/components/HeaderSidebar/HeaderSidebar';
import style from './styles.module.scss';

import React, { useContext } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import ItemProduct from '@components/ContentSIdebar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import { SidebarContext } from '@/contexts/Sidebar';

const Cart = () => {
    const { listData = [] } = useContext(SidebarContext);
    console.log('listData:', listData);

    return (
        <div className={style.container}>
            <div>
                <HeaderSidebar icon={<CiShoppingCart />} title={'Cart'} />
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
                        />
                    );
                })}
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
