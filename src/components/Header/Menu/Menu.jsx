import React, { useContext } from "react";
import styles from "../styles.module.scss";
import { SidebarContext } from "@/contexts/Sidebar";

const Menu = ({ content }) => {
    const { setIsOpen } = useContext(SidebarContext);

    return (
        <div className={styles.menu} onClick={() => setIsOpen(true)}>
            {content}
        </div>
    );
};

export default Menu;
