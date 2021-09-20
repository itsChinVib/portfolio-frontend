import React from 'react';

import ScrollToTop from 'components/common/ScrollToTop';
import { HeaderComponent } from './Header';

export const LayoutComponent = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <ScrollToTop />
      {children}
    </>
  );
};
