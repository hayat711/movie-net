import React, { ReactNode } from 'react';
import Header from '../navbar/Header';
import Sidebar from '../sidebar/Sidebar';

type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    const sidebarWidth = 1 / 7; // Change this to the width of your sidebar
    return (
        

        <div className='flex flex-col min-h-screen bg-black'>
            <Header />
            <div className='flex flex-1 overflow-hidden'>
                <div className='hidden lg:flex w-1/7 md:1/5 h-full sm:hidden'>
                    <Sidebar />
                </div>
                <main className='flex-1 overflow-auto' style={{ width: `calc(100% - ${sidebarWidth * 100}%)` }}>
                    {children}
                </main>
            </div>
        </div>

        
    );
};
export default Layout;
