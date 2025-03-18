import Header from '@components/Header/Header';
import style from './styles.module.scss';
import MainLayout from '@components/Layout/MainLayout';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';
import { OurShopProvider } from '@/contexts/OurshopProvider';
import Filter from '@pages/OurShop/components/Filter';
import ListProducts from '@pages/OurShop/components/ListProducts';

const OurShop = () => {
    const navigate = useNavigate();

    const handleBackPreviousPage = () => {
        navigate(-1);
    }

    return (
        <OurShopProvider >
            <Header />
            <MainLayout>
                <div className={style.container}>
                    <div>Home &gt; <span className={style.shop}>Shop</span></div>
                    <div className={style.return} onClick={() => handleBackPreviousPage()}>&lt; Return to previous page</div>
                </div>
                <Banner/>
                <div>
                    <Filter />
                    <ListProducts />
                </div>
            </MainLayout>
        </OurShopProvider>
    );
};

export default OurShop;
