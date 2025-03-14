import { createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext()

export const ToastProvider = ({children}) => {
    const value ={
         toast
    }
    return (
        <ToastContext.Provider value={value}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    )
}