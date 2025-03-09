import { dataMenu } from '@components/Footer/constants';
import style from './styles.module.scss';

const Footer = () => {
    return (
        <div className={style.container}>
            <div>
                <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png' />
            </div>
            <div className={style.boxNav}>
              {dataMenu.map((item) => {
                return <div>{item.content}</div>
              })}
            </div>
            <div>Guaranteed safe checkout
            </div>
            <div>Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce themes.</div>
        </div>
    );
};

export default Footer;
