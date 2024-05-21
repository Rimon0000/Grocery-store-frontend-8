import NavbarPage from '@/components/shared/Navbar';
import React from 'react';

const layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
      <NavbarPage></NavbarPage>
      <div className="mx-auto container">{children}</div>
      <p>footer</p>
    </div>
    );
};

export default layout;