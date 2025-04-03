import React, { useContext } from 'react';
import style from '../../styles.module.scss';
import CartTable from '@pages/Cart/component/Content/CartTable';
import CartPrice from '@pages/Cart/component/Content/CartPrice';
import { SidebarContext } from '@/contexts/Sidebar';
import { addProductToCart } from '@/apis/cartService';
import { deleteProduct } from '@/apis/cartService';

const Content = () => {
    const { listData, handleGetListProduct } = useContext(SidebarContext);
    // console.log(listData);

    const handleReplaceQuantity = (data) => {
        console.log(data);

        addProductToCart(data)
            .then(() => handleGetListProduct(data.userId, 'cart'))
            .catch((err) => console.log(err));
    };

    const handleDeleteProduct = (data) => {
        // console.log(data);
        deleteProduct(data)
            .then(() => handleDeleteProduct(data.userId, 'cart'))
            .catch((err) => console.log(err));
    };
    return (
        <div className={style.containerForContent}>
            <div>
                {listData ? (
                    <CartTable
                        listData={listData}
                        handleReplaceQuantity={handleReplaceQuantity}
                        handleDeleteProduct={handleDeleteProduct}
                    />
                ) : (
                    <p>Loading cart data...</p>
                )}
            </div>

            <div>
                <CartPrice />
            </div>
        </div>
    );
};

export default Content;
