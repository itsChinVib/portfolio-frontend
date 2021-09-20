import React from 'react';
import { useWindowSize } from 'react-use';
import { Typography, Grid } from '@material-ui/core';

import { HeroComponent } from 'components/common/Hero';
import { SkillListItem } from 'components/SkillListItem';
import { ExperienceData } from 'common/data/experience-data';

import { homePageStyles } from './styles';
import clsx from 'clsx';

export const HomePage = () => {
  const classes = homePageStyles();

  const { width } = useWindowSize();
  let mobile = width < 512;

  return (
    <div className={'homepage'}>
      <HeroComponent flexCenter>
        <div>
          <Typography className={classes.introName}>Chinmay Vibhute</Typography>
          <Typography className={classes.introOneLine}>
            Aspiring Developer, {mobile ? <br /> : null}Computer Vision and Deep
            Learning Enthusiast
          </Typography>
        </div>
      </HeroComponent>
      <HeroComponent secondary flexCenter>
        <div>
          <Typography className={classes.briefHi}>
            Hi, I'm Chinmay. Nice to Meet You.
          </Typography>
          <Typography className={classes.briefContent}>
            Currently I am a UG Student at{' '}
            <b>Indian Institute of Technology, Kharagpur</b>, pursuing my{' '}
            <b>Dual Degree (B.Tech + M.Tech)</b> majoring in Mechanical
            Engineering.
            <br />
            As an aspiring <b>Developer</b>, I've done some freelancing
            projects, part time remote work for few startups, and collaborated
            with some talented people to create good product(s).
            <br />I regularly compete on <b>Topcoder</b>, <b>Kaggle</b> and
            currently busy absorbing knowledge in field of <b>Deep Learning</b>,{' '}
            <b>Computer Vision</b>.
            <br />
          </Typography>
        </div>
      </HeroComponent>
      <HeroComponent>
        <div
          className={clsx(classes.skillContainer, {
            [classes.skillContainerMobile]: mobile,
          })}
        >
          <div className={classes.skillTitleWrapper}>
            <Typography className={classes.skillTitle}>
              Skills and Expertise
            </Typography>
            <Typography>
              List of Skills I'm familiar with and have some Experience
            </Typography>
          </div>
          <Grid container>
            <SkillListItem
              title={'Intermediate'}
              subtitle={''}
              items={ExperienceData.skillExpertise.intermediate}
            />
            <SkillListItem
              title={'Advanced'}
              subtitle={''}
              items={ExperienceData.skillExpertise.advanced}
              secondary
            />
            <SkillListItem
              title={'Competent'}
              subtitle={''}
              items={ExperienceData.skillExpertise.competent}
            />
          </Grid>
        </div>
      </HeroComponent>
    </div>
  );
};
