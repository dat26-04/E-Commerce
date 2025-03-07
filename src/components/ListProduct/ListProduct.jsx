import MainLayout from '@components/Layout/MainLayout';
import style from './styles.module.scss';
import Banner2 from '@components/Banner-2/Banner2';
import ProductItem from '@components/ProductItem/ProductItem';

const ListProduct = () => {
    return (
        <MainLayout>
            <div className={style.container}>
                <Banner2 />
                <div className={style.containerItem}>
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </MainLayout>
    );
};

export default ListProduct;
