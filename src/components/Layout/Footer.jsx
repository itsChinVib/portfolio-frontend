import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Tooltip, Typography } from '@material-ui/core';

import CVLogo from 'assets/images/cvlogo-900.png';
import { footerStyles } from './styles';
import clsx from 'clsx';

export const FooterComponent = () => {
  const classes = footerStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container className={classes.textCenter}>
          <Grid
            md={3}
            xs={3}
            className={clsx(classes.gridPadding, classes.colVerticalCenter)}
          >
            <Tooltip title="Home">
              <Link to={''} className={classes.navbarLink}>
                <img
                  className={classes.icon}
                  src={CVLogo}
                  alt="Chinmay Vibhute Logo"
                />
              </Link>
            </Tooltip>
            <Typography>Chinmay Vibhute</Typography>
          </Grid>
          <Grid md={5} xs={1} className={classes.gridPadding} />
          <Grid
            md={3}
            xs={8}
            className={clsx(
              classes.linkList,
              classes.gridPadding,
              classes.colVerticalCenter
            )}
          >
            <Link to={'work-experience'}>
              <Typography className={classes.linkTextWrapper}>
                Work Experience
              </Typography>
            </Link>
            <Link to={'projects'}>
              <Typography className={classes.linkTextWrapper}>
                Projects
              </Typography>
            </Link>
            <Link to={'topcoder'}>
              <Typography className={classes.linkTextWrapper}>
                Topcoder Profile
              </Typography>
            </Link>
            {/* <Link to={'oss-contributions'}>
              <Typography className={classes.linkTextWrapper}>
                Open Source Contributions
              </Typography>
            </Link> */}
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
