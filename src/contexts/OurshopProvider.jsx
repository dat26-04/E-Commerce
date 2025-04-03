import { createContext, useEffect, useState } from 'react';
import { getProduct } from '@/apis/productService';

// eslint-disable-next-line react-refresh/only-export-components
export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
    const sortOptions = [
        { label: 'Default sorting', value: '0' },
        { label: 'Sort by popularity', value: '1' },
        { label: 'Sort by average rating', value: '2' },
        { label: 'Sort by latest', value: '3' },
        { label: 'Sort by price: low to high', value: '4' },
        { label: 'Sort by price: high to low', value: '5' }
    ];
    const showOptions = [
        { label: '8', value: '8' },
        { label: '12', value: '12' },
        { label: 'All', value: 'all' }
    ];

    const [sortId, setSortId] = useState('0');
    const [showId, setShowId] = useState('8');
    const [isShowGrid, setIsShowGrid] = useState(true);
    const [products, setProduct] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const handleLoadMore = () => {
        if (loading) return; 

        setIsLoading(true);
        const query = {
            sortType: sortId,
            page: +page + 1,
            limit: showId
        };
        getProduct(query)
            .then((res) => {
                setProduct((prev) => {
                    return [...prev, ...res.contents];
                });
                setPage(+res.page);
                setTotalPage(res.total);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };
    const values = {
        sortOptions,
        showOptions,
        setSortId,
        setShowId,
        setIsShowGrid,
        products,
        isShowGrid,
        loading,
        handleLoadMore,
        totalPage
    };

    useEffect(() => {
        const query = {
            sortType: sortId,
            page: 1,
            limit: showId
        };
        setIsLoading(true);
        getProduct(query)
            .then((res) => {
                setProduct(res.contents);
                setTotalPage(res.total);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, [showId, sortId]);
    return (
        <OurShopContext.Provider value={values}>
            {children}
        </OurShopContext.Provider>
    );
};
