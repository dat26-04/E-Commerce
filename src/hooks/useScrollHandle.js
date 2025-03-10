import { useEffect, useRef, useState } from 'react';

const useScrollHandle = () => {
    const [scroll, setScroll] = useState(null);
    const [scrollPositon, setScrollPosition] = useState(0);
    const prevScrollPosition = useRef(0);

    const scrollTracking = () => {
        const currentScrollPositon = window.pageYOffset;

        if (currentScrollPositon > prevScrollPosition.current) {
            setScroll('down');
        } else if (currentScrollPositon < prevScrollPosition.current) {
            setScroll('up');
        }

        prevScrollPosition.current =
            currentScrollPositon <= 0 ? 0 : currentScrollPositon;
        setScrollPosition(currentScrollPositon);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    return {
        scroll, scrollPositon
    }
};

export default useScrollHandle;
