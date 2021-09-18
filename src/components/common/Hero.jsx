import React from 'react';
import clsx from 'clsx';

import { heroStyles } from './styles';

export const HeroComponent = ({ children, secondary, flexCenter }) => {
  const classes = heroStyles();
  return (
    <div
      className={clsx(classes.componentWrapper, {
        [classes.secondaryBack]: secondary,
        [classes.flexCenter]: flexCenter,
      })}
    >
      {children}
    </div>
  );
};
