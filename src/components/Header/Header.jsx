import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './BoxIcon/constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '../../../src/assets/react.svg';
import { useContext } from 'react';
import { SidebarContext } from '@/contexts/Sidebar';
const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);

    console.log(isOpen, setIsOpen);
    return (
        <div className={styles.container}>
            <div className={styles.containerHeader}>
                <div className={styles.containerBox}>
                    <div className={styles.containerBoxIcon}>
                        {dataBoxIcon.slice(0, 3).map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={styles.containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img src={Logo} alt='logo' />
                </div>
                <div className={styles.containerBox}>
                    <div className={styles.containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} setIsOpen={item.setIsOpen}/>
                            );
                        })}
                    </div>
                    <div className={styles.containerBoxIcon}>
                        {dataBoxIcon
                            .slice(3, dataBoxIcon.length)
                            .map((item) => {
                                return (
                                    <BoxIcon
                                        type={item.type}
                                        href={item.href}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
