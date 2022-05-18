import React from 'react';

import ScrollToTop from 'components/common/ScrollToTop';
import { HeaderComponent } from './Header';
import { FooterComponent } from './Footer';

export const LayoutComponent = ({ children }) => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <HeaderComponent />
      <ScrollToTop />
      {children}
      <FooterComponent />
    </div>
  );
};
