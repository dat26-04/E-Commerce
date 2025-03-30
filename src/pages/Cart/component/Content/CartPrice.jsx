import React from 'react';
import style from './styles.module.scss';
import Button from '@components/Button/Button';
const CartPrice = () => {
    const src = [
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg',
        'https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg'
    ];
    return (
        <>
            <div className={style.container}>
                <div className={style.cart}>CART TOTALS</div>
                <div className={style.boxTotal}>
                    <div className={style.subtotal}>Subtotal</div>
                    <div>$3,339.93</div>
                </div>
                <div className={style.boxTotal}>
                    <div className={style.total}>TOTAL</div>
                    <div>$3,339.93</div>
                </div>
                <div className={style.button}>
                    <Button content='PROCEED TO CHECKOUT' />
                    <Button content='CONTINUE SHOPPING' width='150px' />
                </div>
            </div>
            <div className={style.containerPay}>
                <div className={style.title}>
                    Guaranted <span className={style.safe}>safe</span> checkoutD
                </div>
                <div className={style.box}>
                    {src.map((item, index) => {
                        return (
                            <img
                                src={item}
                                className={style.image}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CartPrice;
