import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Tooltip,
  Container,
  IconButton,
  Typography,
} from '@material-ui/core';
import { useWindowSize } from 'react-use';
import clsx from 'clsx';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import CVLogo from 'assets/images/cvlogo-900.png';
import { headerStyles } from './styles';
import { toggleTheme } from 'redux-store/actions/settings';

export const HeaderComponent = ({ appBarProps, toolBarProps }) => {
  const classes = headerStyles();

  const { width } = useWindowSize();
  let mobile = width < 512;
  const dispatch = useDispatch();
  const theme = useSelector(({ settings }) => settings.uiTheme, shallowEqual);

  return (
    <>
      <AppBar
        position="transparent"
        color={'transparent'}
        elevation={0}
        {...appBarProps}
      >
        <Toolbar {...toolBarProps}>
          <Container className={classes.navbarContainer}>
            <div className={classes.navbarBrand}>
              <Tooltip title="Chinmay Vibhute">
                <Link to={''} className={classes.navbarLink}>
                  <img
                    className={classes.icon}
                    src={CVLogo}
                    alt="Chinmay Vibhute Logo"
                  />
                </Link>
              </Tooltip>
            </div>
            <div className={classes.navbarLink}>
              {!mobile && (
                <>
                  <a
                    href="https://github.com/chinvib66"
                    target="_blank"
                    className={classes.icon}
                    rel="noreferrer"
                  >
                    <IconButton size="large">
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chinmay-vibhute"
                    target="_blank"
                    className={classes.icon}
                    rel="noreferrer"
                  >
                    <IconButton size="large">
                      <LinkedInIcon fontSize="large" />
                    </IconButton>
                  </a>
                  <Tooltip title="Toggle Theme">
                    <IconButton
                      onClick={() => {
                        dispatch(toggleTheme());
                      }}
                      size="large"
                    >
                      {theme !== 'light' ? (
                        <Brightness7Icon className={classes.themeIcon} />
                      ) : (
                        <Brightness4Icon className={classes.themeIcon} />
                      )}
                    </IconButton>
                  </Tooltip>
                </>
              )}
              <Tooltip title="Menu" aria-label="menu">
                <IconButton size="large">
                  <MenuIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </div>
          </Container>
        </Toolbar>
        <Container>
          <Typography
            variant={'body2'}
            className={clsx(classes.thanks, { [classes.mobileThanks]: mobile })}
          >
            Hey There! Thanks for Visiting :)
          </Typography>
        </Container>
      </AppBar>
    </>
  );
};
