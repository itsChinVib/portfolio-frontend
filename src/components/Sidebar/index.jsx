import React from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import { useKeyPressEvent } from 'react-use';
import { Link } from 'react-router-dom';

import CloseIcon from '@material-ui/icons/Close';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { sideBarStyles } from './styles';
import CVLogo from 'assets/images/cvlogo-900.png';

export const SideBarComponent = ({ children, show, onHide }) => {
  const classes = sideBarStyles();

  useKeyPressEvent('Escape', onHide);

  const hideBar = () => {
    onHide();
  };

  return (
    <>
      {show ? (
        <>
          <Container fixed className={classes.menuWrapper}>
            <div className={classes.iconWrapper}>
              <div>
                <Link
                  to={''}
                  onClick={hideBar}
                  className={classes.linkTextWrapper}
                >
                  <img
                    className={classes.cvIcon}
                    src={CVLogo}
                    alt="Chinmay Vibhute Logo"
                  />
                </Link>
              </div>
              <div>
                <IconButton onClick={hideBar}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
            <div>
              <div>
                <Typography className={classes.sectionTitle}>
                  Experience
                </Typography>
              </div>
              <div>
                <Link to={'work-experience'} onClick={hideBar}>
                  <Typography className={classes.linkTextWrapper}>
                    Work Experience
                  </Typography>
                </Link>
                <Link to={'projects'} onClick={hideBar}>
                  <Typography className={classes.linkTextWrapper}>
                    Projects
                  </Typography>
                </Link>
                <Link to={'topcoder'} onClick={hideBar}>
                  <Typography className={classes.linkTextWrapper}>
                    Topcoder Profile
                  </Typography>
                </Link>
                <Link to={'oss-contributions'} onClick={hideBar}>
                  <Typography className={classes.linkTextWrapper}>
                    Open Source Contributions
                  </Typography>
                </Link>
                {/* <Link to={'freelance'} onClick={hideBar}>
                  <Typography className={classes.linkTextWrapper}>
                    Freelancing Projects
                  </Typography>
                </Link> */}
              </div>
            </div>
            <div>
              <div>
                <Typography className={classes.sectionTitle}>
                  Profiles
                </Typography>
              </div>
              <div>
                <a
                  href="https://github.com/chinvib66"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography className={classes.linkTextWrapper}>
                    <GitHubIcon className={classes.socialIcon} />
                    Github: chinvib66
                  </Typography>
                </a>
                <a
                  href="https://www.linkedin.com/in/chinmay-vibhute"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography className={classes.linkTextWrapper}>
                    <LinkedInIcon className={classes.socialIcon} />
                    LinkedIn
                  </Typography>
                </a>
              </div>
            </div>
          </Container>
          <div onClick={hideBar} className={classes.componentBack}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
