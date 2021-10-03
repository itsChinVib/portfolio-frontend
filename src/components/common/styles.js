import { makeStyles } from '@material-ui/core/styles';

export const heroStyles = makeStyles(theme => ({
  componentWrapper: {
    minHeight: '70vh',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  secondaryBack: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}));
