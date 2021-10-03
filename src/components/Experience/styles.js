import { makeStyles } from '@material-ui/core/styles';

export const internshipItemStyles = makeStyles(theme => ({
  componentWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    margin: '10px 20px',
    padding: 40,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  positionWrapper: {},
  headingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  designationWrapper: {
    fontSize: 24,
  },
  linksList: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.secondary.main,
    textDecoration: 'underline',
  },
  secondaryLink: {
    color: theme.palette.primary.main,
  },
  mobile: {
    justifyContent: 'center',
  },
  techStack: {
    fontSize: 18,
    margin: 10,
  },
}));

export const freelanceProjectStyles = makeStyles(theme => ({
  componentWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    margin: '10px 20px',
    padding: 40,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  positionWrapper: {},
  headingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  designationWrapper: {
    fontSize: 24,
  },
  linksList: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.secondary.main,
    textDecoration: 'underline',
  },
  secondaryLink: {
    color: theme.palette.primary.main,
  },
  mobile: {
    justifyContent: 'center',
  },
  techStack: {
    fontSize: 18,
    margin: 10,
  },
}));

export const projectStyles = makeStyles(theme => ({
  componentWrapper: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    margin: '10px 20px',
    padding: 40,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  positionWrapper: {},
  headingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleWrapper: {
    fontSize: 24,
  },
  linksList: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.secondary.main,
    textDecoration: 'underline',
  },
  secondaryLink: {
    color: theme.palette.primary.main,
  },
  mobile: {
    justifyContent: 'center',
  },
  techStack: {
    fontSize: 18,
    margin: 10,
  },
}));

export const expTypeHeadingStyles = makeStyles(theme => ({
  componentWrapper: {
    minHeight: '30vh',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryBack: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
