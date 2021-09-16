import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Tooltip, Typography } from '@material-ui/core';

import CVLogo from 'assets/images/cvlogo-900.png';
import { footerStyles } from './styles';

export const FooterComponent = () => {
  const classes = footerStyles();
  return (
    <footer>
      <Container>
        <Grid container>
          <Grid md={3}>
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
          <Grid md={9}></Grid>
        </Grid>
        <Grid container></Grid>
      </Container>
    </footer>
  );
};
