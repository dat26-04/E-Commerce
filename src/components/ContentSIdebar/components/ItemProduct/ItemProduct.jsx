import React, { useContext, useState } from 'react';
import style from './styles.module.scss';
import { MdClose } from 'react-icons/md';
import { deleteProduct } from '@/apis/cartService';
import { SidebarContext } from '@/contexts/Sidebar';
const ItemProduct = ({
    src,
    nameProduct,
    skuProduct,
    priceProduct,
    sizeProduct,
    quantity,
    productId,
    userId
}) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const { handleGetListProduct } = useContext(SidebarContext);
    const handleRemoveItem = () => {
        setIsDeleted(true)
        deleteProduct(productId, userId)
            .then((res) => {
                console.log(res);
                setIsDeleted(false);
                handleGetListProduct(userId, "cart")
            })
            .catch((err) => {console.log(err)
                setIsDeleted(false);
            });
    };
    return (
        <div className={style.container}>
            <img src={src} />
            <div className={style.close}>
                <div onClick={handleRemoveItem}>
                    <MdClose />
                </div>
            </div>
            <div className={style.box}>
                <div>{nameProduct}</div>
                <div>Size: {sizeProduct}</div>
                <div>
                    {quantity} x {priceProduct}
                </div>
                <div>SKU: {skuProduct}</div>
                {/* <div>{priceProduct}</div> */}
            </div>
        </div>
    );
};

export default ItemProduct;
