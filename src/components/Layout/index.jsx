import React from 'react';

import ScrollToTop from 'components/common/ScrollToTop';
import { HeaderComponent } from './Header';
import { FooterComponent } from './Footer';

export const LayoutComponent = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <ScrollToTop />
      {children}
      <FooterComponent />
    </>
  );
};
