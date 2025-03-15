import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getInfo } from '@/apis/authService';
// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [userId, setUserId] = useState(Cookies.get('userId'));

    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('userId');
        Cookies.remove('refreshToken');
        setUserInfo(null);
        window.location.reload();
    };
    useEffect(() => {
        if (userId) {
            getInfo(userId)
                .then((res) => setUserInfo(res.data.data))
                .catch((err) => console.log(err));
        }
    }, [userId]);
    // console.log(userInfo)
    return (
        <StoreContext.Provider value={{ userInfo, handleLogout, setUserId }}>
            {children}
        </StoreContext.Provider>
    );
};
