import React, { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SidebarContext } from '@/contexts/Sidebar';
import { StoreContext } from '@/contexts/StoreProvider';
import { useNavigate } from 'react-router-dom';

const Menu = ({ content }) => {
    const { setIsOpen, setType } = useContext(SidebarContext);
    const { userInfo, handleLogout } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);

    const navigate = useNavigate();

    const handleSetType = () => {
        if (content === 'Sign In' && !userInfo) {
            setIsOpen(true);
            setType('login');
        } else if (content === "Our Shop") {
            navigate("/shop");
        }
    };

    const handleRenderUsername = () => {
        if (content === 'Sign In' && userInfo?.username) {
            return `Hello ${userInfo.username}`;
        }
        return content;
    };

    const handleMouseEnter = () => {
        if (content === 'Sign In' && userInfo?.username) {
            setIsShowSubMenu(true);
        }
    };

    const handleMouseLeave = () => {
        setIsShowSubMenu(false);
    };

    return (
        <div
            className={styles.menu}
            onClick={handleSetType}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {handleRenderUsername()}

            {isShowSubMenu && (
                <div
                    className={styles.test}
                    onClick={handleLogout}
                >
                    Log Out
                </div>
            )}
        </div>
    );
};

export default Menu;
