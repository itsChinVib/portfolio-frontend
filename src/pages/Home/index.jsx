import React from 'react';
import { useWindowSize } from 'react-use';
import { Typography } from '@material-ui/core';

import { HeroComponent } from 'components/common/Hero';
import { homePageStyles } from './styles';

export const HomePage = () => {
  const classes = homePageStyles();

  const { width } = useWindowSize();
  let mobile = width < 512;
  return (
    <>
      <HeroComponent>
        <div>
          <Typography className={classes.introName}>Chinmay Vibhute</Typography>
          <Typography className={classes.introOneLine}>
            Aspiring Developer, {mobile ? <br /> : null}Computer Vision and Deep
            Learning Enthusiast
          </Typography>
        </div>
      </HeroComponent>
      <HeroComponent secondary>
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
            As an aspiring Developer, I've done some Freelancing Projects, part
            time remote work for few startups, and collaborated with some
            talented people to create good product(s).
            <br />I regularly compete on Topcoder, Kaggle and currently busy
            absorbing knowledge in field of Deep Learning, Computer Vision.
            <br />
          </Typography>
        </div>
      </HeroComponent>
    </>
  );
};
