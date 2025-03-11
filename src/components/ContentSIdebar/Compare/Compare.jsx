import HeaderSidebar from '@components/ContentSIdebar/components/HeaderSidebar/HeaderSidebar';
import style from './styles.module.scss';
import { TfiReload } from 'react-icons/tfi';
import ItemProduct from '@components/ContentSIdebar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

const Compare = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <HeaderSidebar icon={<TfiReload />} title={'Compare'} />
                <ItemProduct />
            </div>
            <div>
                <Button content={'View Compare'} />
            </div>
        </div>
    );
};

export default Compare;
