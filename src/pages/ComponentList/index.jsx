import React, { useState } from 'react';
import clsx from 'clsx';
import _ from 'lodash';
import { Grid, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { componentStyle } from './styles';
import { HeaderComponent } from 'components/Layout/Header';
import { FooterComponent } from 'components/Layout/Footer';
import { HeroComponent } from 'components/common/Hero';
import { SkillListItem } from 'components/SkillListItem';
import { SideBarComponent } from 'components/Sidebar';
import { internships } from 'common/data/experience-data';
import { InternshipItem } from 'components/Experience/Internship';
import { TabbedExperienceLayout } from 'components/Experience/TabbedExperienceLayout';

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

const tabData = [
  { label: 'T1', content: <div>T1</div> },
  { label: 'T2', content: <div>T2</div> },
];

export const ComponentListPage = () => {
  const classes = componentStyle();

  const components = [
    {
      name: 'TabbedExpLayout',
      Component: () => {
        return <TabbedExperienceLayout data={tabData} />;
      },
    },

    {
      name: 'InternshipItem',
      Component: () => {
        const i = internships[0];
        return <InternshipItem {...i} />;
      },
    },
    {
      name: 'SideBar',
      Component: () => {
        const [show, setShow] = useState(false);
        return (
          <>
            <IconButton onClick={() => setShow(!show)} size="large">
              <MenuIcon fontSize="large" />
            </IconButton>
            <SideBarComponent show={show} onHide={() => setShow(false)} />
          </>
        );
      },
    },
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
