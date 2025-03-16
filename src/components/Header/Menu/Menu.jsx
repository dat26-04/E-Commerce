import React, { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SidebarContext } from '@/contexts/Sidebar';
import { StoreContext } from '@/contexts/StoreProvider';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const Menu = ({ content }) => {
    const { setIsOpen, setType } = useContext(SidebarContext);
    const { userInfo, handleLogout } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    // console.log(userInfo);

    const navigate  = useNavigate();
    const handleSetType = () => {
        if (content === 'Sign In' && !userInfo) {
            setIsOpen(true);
            setType('login');
        }

        if(content === "Our Shop") {
            navigate("/shop")
        }
    };
    // console.log("userInfo at render:", userInfo);
    const handleRenderUsername = (content) => {
        if (content === 'Sign In' && userInfo && userInfo.username) {
            return `Hello ${userInfo.username}`;
        } else {
            return content;
        }
    };
    const handleHover = () => {
        console.log(content);

        if (content === 'Sign In' && userInfo && userInfo.username) {
            setIsShowSubMenu(true);
        }
    };

    
    return (
        <div
            className={styles.menu}
            onClick={handleSetType}
            onMouseOver={handleHover}
        >
            {handleRenderUsername(content)}

            {isShowSubMenu && (
                <div
                    className={styles.test}
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    onClick={handleLogout}
                >
                    Log Out
                </div>
            )}
        </div>
    );
};

export default Menu;
