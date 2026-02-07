import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
    return (
        <div>
            <header>
                <h1>My Application</h1>
                {/* You can add more header elements here */}
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Footer content goes here</p>
            </footer>
        </div>
    );
};

export default MainLayout;