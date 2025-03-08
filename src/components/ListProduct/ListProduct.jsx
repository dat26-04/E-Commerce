import MainLayout from '@components/Layout/MainLayout';
import style from './styles.module.scss';
import Banner2 from '@components/Banner-2/Banner2';
import ProductItem from '@components/ProductItem/ProductItem';

const ListProduct = ({ data }) => {
    console.log(data)
    return (
        <MainLayout>
            <div className={style.container}>
                <Banner2 />
                <div className={style.containerItem}>
                    {data && data.map((item) => (
                        <ProductItem
                            key={item._id}
                            src={item.images?.[0]}
                            prevsrc={item.images?.[1]}
                            name={item.name}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default ListProduct;
