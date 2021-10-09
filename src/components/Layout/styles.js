import { makeStyles } from '@material-ui/core/styles';

export const headerStyles = makeStyles(theme => ({
  icon: {
    maxHeight: 72,
  },
  navbarBrand: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  navbarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  navbarLink: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: 5,
  },
  thanks: {
    padding: 10,
  },
  mobileThanks: {
    textAlign: 'center',
    fontSize: 12,
  },
}));

export const footerStyles = makeStyles(theme => ({
  footer: {
    minHeight: '20vh',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    maxHeight: 72,
  },
  linkList: {
    justifyContent: 'right',
  },
  textCenter: {
    textAlign: 'center',
  },

  gridPadding: {
    padding: '25px 0',
  },
  colVerticalCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));
