import React, { useContext } from 'react';
import style from './styles.module.scss';
import { SidebarContext } from '@/contexts/Sidebar';
import classNames from 'classnames';
import { IoClose } from 'react-icons/io5';
const Sidebar = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={style.container}>
            <div
                className={classNames({
                    [style.overlay]: isOpen
                })}
                onClick={handleToggle}
            />
            <div
                className={classNames(style.sidebar, {
                    [style.slideSidebar]: isOpen
                })}
                onClick={handleToggle}
            >
                {isOpen && <div className={style.close}>
                    <IoClose />
                </div>}
                Sidebar
            </div>
        </div>
    );
};

export default Sidebar;
