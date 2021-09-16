import React from 'react';
import clsx from 'clsx';

import { heroStyles } from './styles';

export const HeroComponent = ({ children, secondary }) => {
  const classes = heroStyles();
  return (
    <div
      className={clsx(classes.componentWrapper, {
        [classes.secondaryBack]: secondary,
      })}
    >
      {children}
    </div>
  );
};
