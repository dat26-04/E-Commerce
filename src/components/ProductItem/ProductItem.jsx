import style from './styles.module.scss';
import fbicon from '@icon/fbicon.svg';
import yticon from '@icon/yticon.svg';
import hearticon from '@icon/hearticon.svg';
import carticon from '@icon/carticon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
const ProductItem = ({
    src,
    prevsrc,
    name,
    price,
    details,
    isHome = true
}) => {
    console.log(details);
    return (
        <div>
            <div className={style.boxImage}>
                <img src={src} />
                <img src={prevsrc} className={style.showWhenHover} />
                <div className={style.showNavbarWhenHover}>
                    <div className={style.boxIcon}>
                        <img src={fbicon} />
                    </div>
                    <div className={style.boxIcon}>
                        <img src={hearticon} />
                    </div>
                    <div className={style.boxIcon}>
                        <img src={yticon} />
                    </div>
                    <div className={style.boxIcon}>
                        <img src={carticon} />
                    </div>
                </div>
            </div>
            {!isHome && (
                <div className={style.boxSize}>
                    {details?.size.map((item) => {
                        return (
                            <div key={item.name} className={style.size}>
                                {item.name}
                            </div>
                        );
                    })}
                </div>
            )}
            <div className={cls(style.name, {
                [style.textCenter]: !isHome
            })}> {name}</div>
            {!isHome && <div className={style.textCenter}>Brand 01</div>}
            <div className={cls(style.price, style.textCenter)}> {price}</div>

            {!isHome && <div className={style.boxButton}>
                <Button content={"ADD TO CART"}/>
                </div>}
        </div>
    );
};

export default ProductItem;
