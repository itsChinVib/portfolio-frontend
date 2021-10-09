import React from 'react';
import _ from 'lodash';
import clsx from 'clsx';
import { useWindowSize } from 'react-use';

import { freelanceProjectStyles } from './styles';

export const FreeLanceProject = ({
  org,
  designation,
  date,
  description,
  links,
  techUsed,
  secondary,
}) => {
  const classes = freelanceProjectStyles();
  const { width } = useWindowSize();
  let mobile = width < 480;

  return (
    <div
      className={clsx(classes.componentWrapper, {
        [classes.secondary]: secondary,
        [classes.mobile]: mobile,
        [classes.mobileComponentWrapper]: mobile,
      })}
    >
      <div className={classes.headingWrapper}>
        <div className={classes.positionWrapper}>
          <div className={classes.designationWrapper}>
            {designation && `${designation} | `}
            {org}
          </div>
          <div>{date}</div>
        </div>
        <div
          className={clsx(classes.linksList, {
            [classes.secondaryLink]: secondary,
          })}
        >
          {_.map(
            links,
            ele =>
              !ele.hide && (
                <a href={ele.url} target="_blank" rel="noreferrer">
                  {ele.label}
                </a>
              )
          )}
        </div>
      </div>
      <div className={classes.techStack}>
        Tech Stack: {_.join(_.slice(techUsed, 0, 10), ', ')}
      </div>
      <div>
        <ul>
          {_.map(description, ele => (
            <li>{ele}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
