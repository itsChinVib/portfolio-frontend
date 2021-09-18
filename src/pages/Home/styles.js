import { makeStyles } from '@material-ui/core/styles';

export const homePageStyles = makeStyles(theme => ({
  introName: {
    fontWeight: 'bold',
    fontSize: '3rem',
    padding: '0 30px 30px 30px',
    textAlign: 'center',
  },
  introOneLine: {
    fontSize: '1.5rem',
    padding: '0 30px 30px 30px',
    textAlign: 'center',
  },
  briefHi: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.common.white,
    padding: '40px 40px 0px 40px',
  },
  briefContent: {
    fontSize: '1.25rem',
    maxWidth: 820,
    color: theme.palette.common.white,
    padding: 40,
  },
  skillContainer: {
    padding: 40,
  },
  skillTitleWrapper: {
    padding: 40,
    textAlign: 'center',
  },
  skillTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  skillContainerMobile: {
    padding: 10,
  },
}));
