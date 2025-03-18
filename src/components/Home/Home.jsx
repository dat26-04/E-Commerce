import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import Body from '@components/Body/Body';
import ListProduct from '@components/ListProduct/ListProduct';
import { getProduct } from '@/apis/productService';
import { useEffect, useState } from 'react';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import SaleHomepage from '@components/SaleHomepage/SaleHomepage';
import Footer from '@components/Footer/Footer';

const Home = () => {

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {

        const query = {
            sortType: 0,
            page: 1,
            limit: 10
        }
        getProduct(query).then((res) => {    
            setListProduct(res.contents);

        });
    }, [])
    return (
        <div>
            <div className={styles.container}>
                <Header />
                <Banner />
                <Body />
                <ListProduct data={listProduct.slice(0, 2)}/>
                <PopularProduct data={listProduct.slice(2, listProduct.length)}/>
                <SaleHomepage />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
