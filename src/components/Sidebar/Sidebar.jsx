import React, { useContext } from 'react';
import style from './styles.module.scss';
import { SidebarContext } from '@/contexts/Sidebar';
import classNames from 'classnames';
import { IoClose } from 'react-icons/io5';
import Login from '@components/ContentSIdebar/Login/Login';
import Compare from '@components/ContentSIdebar/Compare/Compare';
import WishList from '@components/ContentSIdebar/components/WIshList/WishList';
import Cart from '@components/ContentSIdebar/Cart/Cart';
const Sidebar = () => {
    const { isOpen, setIsOpen, type } = useContext(SidebarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleSwitchContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'heart':
                return <WishList />;
            case 'cart':
                return <Cart />;
            case 'reload':
                return <Compare />;
            default : 
                return <Login />
        }
    };
    return (
        <div className={style.container}>
            <div
                className={classNames({
                    [style.overlay]: isOpen
                })}
                // onClick={handleToggle}
            />
            <div
                className={classNames(style.sidebar, {
                    [style.slideSidebar]: isOpen
                })}
                // onClick={handleToggle}
            >
                {isOpen && (
                    <div className={style.close}>
                        <IoClose />
                    </div>
                )}
                {handleSwitchContent()}
            </div>
        </div>
    );
};

export default Sidebar;
