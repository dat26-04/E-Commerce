import Home from '@components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SidebarProvider } from '@/contexts/Sidebar';
import Sidebar from '@components/Sidebar/Sidebar';
function App() {
    return (
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
    );
}

export default App;
