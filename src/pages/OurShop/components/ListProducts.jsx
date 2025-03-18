import MainLayout from '@components/Layout/MainLayout';
import React, { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurshopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import style from "../styles.module.scss";

const ListProducts = () => {
    const { products } = useContext(OurShopContext);
    console.log(products);
    return (
        <MainLayout>
            <div className={style.containerProduct}>
                {products.map((item) => (
                    <ProductItem
                        key={item.id}
                        src={item.images[0]}
                        prevSrc={item.images[1]}
                        name={item.name}
                        price={item.price}
                        details={item}
                        isHome={false}
                    />
                ))}
            </div>
        </MainLayout>
    );
};

export default ListProducts;
