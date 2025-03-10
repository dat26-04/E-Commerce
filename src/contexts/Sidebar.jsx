import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SidebarContext = createContext()

export const SidebarProvider = ({children}) => {
    const [isOpen, setIsOpen ]= useState(false);
    
    return (
        <SidebarContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </SidebarContext.Provider>
    )
}