
import style from './styles.module.scss';
import fbicon from '@icon/fbicon.svg';
import yticon from '@icon/yticon.svg';
import hearticon from '@icon/hearticon.svg';
import carticon from '@icon/carticon.svg';

const ProductItem = ({src, prevsrc, title, price}) => {
    return (
        <div>
            <div className={style.boxImage}>
                <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg' />
                <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min-285x340.jpg' className={style.showWhenHover}/>
                <div className={style.showNavbarWhenHover}>
                    <div className={style.boxIcon}>
                        <img src={fbicon}/>
                    </div>
                    <div className={style.boxIcon}>
                        <img src={hearticon}/>
                    </div>
                    <div className={style.boxIcon}>
                        <img src={yticon}/>
                    </div>
                    <div className={style.boxIcon}>
                        <img src={carticon}/>
                    </div>
                </div>
            </div>
            <div className={style.title}>  Yellow Gold</div>
            <div className={style.price}> $99.99</div>
        </div>
    );
};

export default ProductItem;
