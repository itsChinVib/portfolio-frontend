import { makeStyles } from '@material-ui/core/styles';

export const homePageStyles = makeStyles(theme => ({
  introName: {
    fontWeight: 'bold',
    fontSize: '3rem',
    margin: '70px auto 30px auto',
    textAlign: 'center',
  },
  introOneLine: {
    fontSize: '1.5rem',
    margin: '30px auto',
  },
  briefHi: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  briefContent: {
    fontSize: '1.25rem',
    margin: '30px auto',
    maxWidth: 820,
    color: theme.palette.common.white,
  },
}));
