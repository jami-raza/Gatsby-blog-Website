import React, { ReactNode } from 'react';
import {Link}  from 'gatsby';

type LayoutProps = {
    children:ReactNode
}

const Layout = ({children}:LayoutProps) => {
    return (
        <div>
            <h1>Site Title</h1>
            <Link to="/about">About</Link>
        {children}
        </div>
    );
};
export default Layout;