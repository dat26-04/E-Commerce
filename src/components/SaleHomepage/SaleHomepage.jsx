import React, { useEffect, useRef, useState } from 'react';
import style from './styles.module.scss';
import Button from '@components/Button/Button';
const SaleHomepage = () => {

    const [scroll, setScroll] = useState(null);
    const [transXposition, setTransXposition] = useState(80);
    const [scrollPositon, setScrollPosition] = useState(0);
    const prevScrollPosition = useRef(0);
    
    const scrollTracking = () => {
      const currentScrollPositon = window.pageYOffset;
      
      if(currentScrollPositon > prevScrollPosition.current) {
        setScroll("down");
      }
      else if(currentScrollPositon < prevScrollPosition.current) {
        setScroll('up');
      }

      prevScrollPosition.current = currentScrollPositon <= 0 ? 0 : currentScrollPositon;
      setScrollPosition(currentScrollPositon);
    }

    useEffect(() => {
      window.addEventListener('scroll', scrollTracking);
      return () => window.removeEventListener('scroll', scrollTracking)
    }, [])
      // console.log(scrollPositon)
    const handleTransX = () => {
      if(scroll === 'down' && scrollPositon >= 3658) {
        setTransXposition(transXposition <= 0 ? 0 : transXposition - 1)
      }else if (scroll === "up") {
        setTransXposition(transXposition <= 80 ? 80 : transXposition + 1)
      }
      
    }

    useEffect(() => {
      handleTransX();
    }, [scrollPositon])
    return (
        <div className={style.container}>
            <div style={{
              transform: `translateX(${transXposition}px)`,
              transition: `transform 0.6s ease`
            }}>
                <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg' />
            </div>
            <div>
                <h2 className={style.title}>Sale of the year</h2>
                <p className={style.desc}>
                      Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>
                <div className={style.button}>
                    <Button content={'Read more'} />
                </div>
            </div>
            <div style={{
              transform: `translateX(-${transXposition}px)`,
              transition: `transform 0.6s ease`
            }}>
                <img src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg' />
            </div>
        </div>
    );
};

export default SaleHomepage;
