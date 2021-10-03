import React from 'react';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';

import { expTypeHeadingStyles } from './styles';

export const ExperienceTypeHeading = ({ title, subtitle, secondary }) => {
  const classes = expTypeHeadingStyles();
  return (
    <div
      className={clsx(classes.componentWrapper, classes.flexCenter, {
        [classes.secondaryBack]: secondary,
      })}
    >
      <Typography variant={'h3'}>{title}</Typography>
      <Typography variant={'subtitle1'}>{subtitle}</Typography>
    </div>
  );
};
