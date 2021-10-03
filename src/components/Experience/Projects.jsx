import React from 'react';
import _ from 'lodash';
import clsx from 'clsx';
import { useWindowSize } from 'react-use';

import { projectStyles } from './styles';

export const ProjectItem = ({
  title,
  mentor,
  date,
  techUsed,
  description,
  secondary,
  links,
}) => {
  const classes = projectStyles();
  const { width } = useWindowSize();
  let mobile = width < 480;

  return (
    <div
      className={clsx(classes.componentWrapper, {
        [classes.secondary]: secondary,
        [classes.mobile]: mobile,
      })}
    >
      <div className={classes.headingWrapper}>
        <div className={classes.positionWrapper}>
          <div className={classes.titleWrapper}>{title}</div>
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
        {techUsed && techUsed.length > 0 && (
          <>Tech Stack: {_.join(_.slice(techUsed, 0, 10), ', ')}</>
        )}
      </div>
      <div>
        {_.isArray(description) ? (
          <ul>
            {_.map(description, ele => (
              <li>{ele}</li>
            ))}
          </ul>
        ) : (
          <ul>
            <li>{description}</li>
          </ul>
        )}
      </div>
    </div>
  );
};
