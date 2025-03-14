
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SidebarProvider } from '@/contexts/Sidebar';
import Sidebar from '@components/Sidebar/Sidebar';
import { ToastProvider } from '@/contexts/Toast';

function App() {
    return (
        <ToastProvider>
            <SidebarProvider>
                <BrowserRouter>
                    <Sidebar />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            {routers.map((item, index) => {
                                return (
                                    <Route
                                        path={item.path}
                                        element={<item.component />}
                                        key={index}
                                    />
                                );
                            })}
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </SidebarProvider>
        </ToastProvider>
    );
}

export default App;
