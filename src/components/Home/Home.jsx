import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import styles from './styles.module.scss';

const Home = () => {
    return (
        <div>
            <div className={styles.container}>
                <Header />
                <Banner />
            </div>
        </div>
    );
};

export default Home;
