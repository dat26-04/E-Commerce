
import { createContext, useState } from "react";
import { getProductFromDatabase } from "@/apis/cartService";

// eslint-disable-next-line react-refresh/only-export-components
export const SidebarContext = createContext()

export const SidebarProvider = ({children}) => {
    const [isOpen, setIsOpen ]= useState(false);
    const [type, setType] = useState("");
    const [listData, setListData] = useState([])

    const handleGetListProduct = (userId, type) => {
        if(userId && type === "cart") {
            getProductFromDatabase(userId).then((res) => {
                setListData(res.data.data);
            })
            .catch(err =>console.log(err))
        }
    }
    return (
        <SidebarContext.Provider value={{isOpen, setIsOpen, type, setType, handleGetListProduct, listData}}>
            {children}
        </SidebarContext.Provider>
    )
}