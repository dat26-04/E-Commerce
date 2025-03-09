
import style from './styles.module.scss';
import fbicon from '@icon/fbicon.svg';
import yticon from '@icon/yticon.svg';
import hearticon from '@icon/hearticon.svg';
import carticon from '@icon/carticon.svg';

const ProductItem = ({src, prevsrc, name, price}) => {
    return (
        <div>
            <div className={style.boxImage}>
                <img src={src} />
                <img src={prevsrc} className={style.showWhenHover}/>
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
            <div className={style.name}> {name}</div>
            <div className={style.price}> {price}</div>
        </div>
    );
};

export default ProductItem;
