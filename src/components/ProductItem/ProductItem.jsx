import style from './styles.module.scss';
import fbicon from '@icon/fbicon.svg';
import yticon from '@icon/yticon.svg';
import hearticon from '@icon/hearticon.svg';
import carticon from '@icon/carticon.svg';
import cls from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurshopProvider';
import Cookies from 'js-cookie';
import { SidebarContext } from '@/contexts/Sidebar';
import { ToastContext } from '@/contexts/Toast';
import { addProductToCart } from '@/apis/cartService';
const ProductItem = ({ src, prevsrc, name, price, details, isHome = true }) => {
    // console.log(details);
    const ourShopStore = useContext(OurShopContext) || {};
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const [sizeChoose, setSizeChoose] = useState('');
    const userId = Cookies.get('userId');
    const { setIsOpen, setType, handleGetListProduct } = useContext(SidebarContext);
    const { toast } = useContext(ToastContext);
    const handleSize = (size) => {
        setSizeChoose(size);
    };
    const handleClear = () => {
        setSizeChoose('');
    };
    const handleAddToCart = () => {
        console.log(userId);
        if (!userId) {
            setIsOpen(true);
            setType('login');

            toast.warning('Please login to add product to cart');
        }

        if (!sizeChoose) {
            toast.warning('Please choose size');
            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose
        };
        // console.log(data);
        addProductToCart(data)
            .then(() => {
                toast.success('Add Product to Cart successfully');
                setIsOpen(true);
                setType('cart');
                handleGetListProduct(userId, "cart");
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        if (isHome) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore.isShowGrid);
        }
    }, [isHome, ourShopStore.isShowGrid]);
    return (
        <div className={isShowGrid ? '' : style.container}>
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
            <div className={isShowGrid ? '' : style.content}>
                {!isHome && (
                    <div className={style.boxSize}>
                        {details?.size.map((item) => {
                            return (
                                <div
                                    key={item.name}
                                    className={cls(style.size, {
                                        [style.isActiveSize]:
                                            sizeChoose === item.name
                                    })}
                                    onClick={() => handleSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}
                {sizeChoose && (
                    <div className={style.clear} onClick={() => handleClear()}>
                        Clear
                    </div>
                )}
                <div
                    className={cls(style.name, {
                        [style.textCenter]: !isHome
                    })}
                >
                    {' '}
                    {name}
                </div>
                {!isHome && <div className={style.textCenter}>Brand 01</div>}
                <div className={cls(style.price, style.textCenter)}>
                    {' '}
                    {price}
                </div>

                {!isHome && (
                    <div
                        className={cls(style.boxButton, {
                            [style.buttonleft]: !isShowGrid
                        })}
                    >
                        <Button
                            content={'ADD TO CART'}
                            onClick={handleAddToCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
