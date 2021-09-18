import React from 'react';
import _ from 'lodash';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';

import { skillListStyles } from './styles';

export const SkillListItem = ({ title, subtitle, items, secondary }) => {
  const classes = skillListStyles();
  return (
    <Grid item xs={12} sm={4}>
      <div
        className={clsx(classes.itemWrapper, {
          [classes.itemWrapperSecondary]: secondary,
        })}
      >
        <Typography className={classes.itemTitle}>{title}</Typography>
        <Typography variant={'subtitle1'}>{subtitle}</Typography>
        <div className={classes.skillListWrapper}>
          {_.map(items, ele => (
            <Typography className={classes.skillItem}>{ele}</Typography>
          ))}
        </div>
      </div>
    </Grid>
  );
};
