import React from 'react';
import clsx from 'clsx';
import _ from 'lodash';
import { Grid, Typography } from '@material-ui/core';

import { componentStyle } from './styles';
import { HeaderComponent } from 'components/Layout/Header';
import { FooterComponent } from 'components/Layout/Footer';
import { HeroComponent } from 'components/common/Hero';
import { SkillListItem } from 'components/SkillListItem';

const ComponentItem = ({ name, Component, componentProps }) => {
  const classes = componentStyle();
  return (
    <Grid item xs={12} className={clsx(classes.itemWrapper)}>
      <div item xs={12} className={clsx(classes.itemName)}>
        {name}
      </div>
      <div item xs={12} className={clsx(classes.itemComponent)}>
        {Component && <Component {...componentProps} />}
      </div>
    </Grid>
  );
};

export const ComponentListPage = () => {
  const classes = componentStyle();

  const components = [
    {
      name: 'SkillListItem',
      Component: SkillListItem,
      componentProps: {
        title: 'Advanced',
        subtitle: 'Skill with near deep experience',
        items: ['Python', 'Javascript', 'Backend Development'],
      },
    },
    {
      name: 'SkillListItem Secondary',
      Component: SkillListItem,
      componentProps: {
        title: 'Advanced',
        subtitle: 'Skill with near deep experience',
        items: ['Python', 'Javascript', 'Backend Development'],
        secondary: true,
      },
    },
    {
      name: 'Header',
      Component: HeaderComponent,
      componentProps: { appBarProps: { position: 'relative' } },
    },
    { name: 'Footer', Component: FooterComponent },
    {
      name: 'Hero Home Page',
      Component: () => {
        return (
          <>
            <HeroComponent>
              <Typography>Some Text</Typography>
            </HeroComponent>
          </>
        );
      },
    },
  ];

  return (
    <Grid container className={clsx(classes.componentListPage)}>
      {_.map(components, ele => {
        return <ComponentItem {...ele} />;
      })}
    </Grid>
  );
};
