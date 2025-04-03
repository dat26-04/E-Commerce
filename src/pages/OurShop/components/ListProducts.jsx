import MainLayout from '@components/Layout/MainLayout';
import React, { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurshopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import style from '../styles.module.scss';
import Button from '@components/Button/Button';
// import Footer from '@components/Footer/Footer';

const ListProducts = () => {
    const { products, isShowGrid, loading, handleLoadMore, totalPage } =
        useContext(OurShopContext);
    return ( 
        <div className={style.containerListProduct}>
            <MainLayout>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div
                            className={isShowGrid ? style.containerProduct : ''}
                        >
                            {products.map((item, index) => (
                                <ProductItem
                                    key={item.id || index }
                                    src={item.images[0]}
                                    prevSrc={item.images[1]}
                                    name={item.name}
                                    price={item.price}
                                    details={item}
                                    isHome={false}
                                />
                            ))}
                        </div>
                        {products.length < totalPage && (
                            <div
                                style={{
                                    marginTop: '20px',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Button
                                    content={'LOAD MORE PRODUCT'}
                                    onClick={handleLoadMore}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    );
};

export default ListProducts;
