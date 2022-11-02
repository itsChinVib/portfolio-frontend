import React from 'react';
import { useWindowSize } from 'react-use';
import { Typography, Grid, Container } from '@material-ui/core';

import { HeroComponent } from 'components/common/Hero';
import { SkillListItem } from 'components/SkillListItem';
import { frontPageSkillsExpertise } from 'common/data/experience-data';

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
            I am a Mobile Developer at{' '}
            <b>Honeywell Technology Solutions Lab Pvt. Ltd.</b>
            <br />I graduated from{' '}
            <b>Indian Institute of Technology, Kharagpur</b>, with{' '}
            <b>Dual Degree (B.Tech + M.Tech)</b> in Mechanical Engineering.
            <br />
            As an aspiring <b>Developer</b>, I've done some freelancing
            projects, part time remote work for few startups, and collaborated
            with some talented people to create good product(s).
            <br />I regularly compete on <b>Topcoder</b>, <b>Kaggle</b> and
            increase my knowledge in field of <b>Deep Learning</b>,{' '}
            <b>Computer Vision</b> in my free time.
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
              {/** Edit regularly */}
              List of Skills I got familiar with during my few years of college
            </Typography>
          </div>
          <Grid container>
            <SkillListItem
              title={'Intermediate'}
              subtitle={''}
              items={frontPageSkillsExpertise.intermediate}
            />
            <SkillListItem
              title={'Advanced'}
              subtitle={''}
              items={frontPageSkillsExpertise.advanced}
              secondary
            />
            <SkillListItem
              title={'Competent'}
              subtitle={''}
              items={frontPageSkillsExpertise.competent}
            />
          </Grid>
        </div>
      </HeroComponent>
      <HeroComponent secondary flexCenter>
        <Typography className={classes.expHighlightsTitle}>
          Experience Highlights
        </Typography>
        <Container className={classes.textCenter}>
          <ul className={classes.expHighlightList}>
            <li className={classes.expHighlightItem}>
              Topcoder Open 2022 Finalist (TCO22)
            </li>
            <li className={classes.expHighlightItem}>
              Google Summer of Code 2021 @ Dept of BioInformatics, Emory
              University School of Medicine
            </li>
            <li className={classes.expHighlightItem}>
              Software Development Intern @ GE Healthcare
            </li>
            <li className={classes.expHighlightItem}>
              Edgenet Shoe Detection and Classification Application (1st Place
              Solution) @ Topcoder
            </li>
            <li className={classes.expHighlightItem}>
              Smallcast: Stop Searching, Start Listening!! on PlayStore
            </li>
            <li className={classes.expHighlightItem}>
              Deep Learning Specialization @ Deeplearning.ai (via Coursera)
            </li>
          </ul>
        </Container>
      </HeroComponent>
    </div>
  );
};
