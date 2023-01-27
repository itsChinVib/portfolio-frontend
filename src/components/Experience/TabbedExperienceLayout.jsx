import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import _ from 'lodash';
import { TabContext, TabPanel } from '@material-ui/lab';
import { tabbedExpLayoutStyles } from './styles';
import clsx from 'clsx';

/**
 * data: [{label, content}]
 */

export const TabbedExperienceLayout = ({ data }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const classes = tabbedExpLayoutStyles();

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <div className="tab-wrapper">
        <TabContext value={tabIndex}>
          <Tabs
            className={clsx(classes.tabsWrapper)}
            centered
            value={tabIndex}
            onChange={handleTabChange}
            variant="fullWidth"
          >
            {_.map(data, (d, i) => (
              <Tab
                className={clsx(classes.label)}
                key={d.label}
                label={d.label}
              />
            ))}
          </Tabs>
          {_.map(data, (d, i) => (
            <TabPanel value={i}>{d.content}</TabPanel>
          ))}
        </TabContext>
      </div>
    </>
  );
};
