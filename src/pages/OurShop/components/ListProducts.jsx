import MainLayout from '@components/Layout/MainLayout';
import React, { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurshopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import style from '../styles.module.scss';
import Button from '@components/Button/Button';
// import Footer from '@components/Footer/Footer';

const ListProducts = () => {
    const { products, isShowGrid, loading } = useContext(OurShopContext);
    return (
        <>
        <MainLayout>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className={isShowGrid ? style.containerProduct : ''}>
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
                    <div style={{
                        marginTop: "20px",
                        marginLeft: "530px"
                    }}>
                        <Button content={'LOAD MORE PRODUCT'} />
                    </div>
                </>
            )}
        </MainLayout>
</>
    );
};

export default ListProducts;
