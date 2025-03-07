import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import Body from '@components/Body/Body';
import ListProduct from '@components/ListProduct/ListProduct';


const Home = () => {
    return (
        <div>
            <div className={styles.container}>
                <Header />
                <Banner />
                <Body />
                <ListProduct />
                
            </div>
        </div>
    );
};

export default Home;
