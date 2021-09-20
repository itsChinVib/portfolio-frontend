import { makeStyles } from '@material-ui/core/styles';

export const sideBarStyles = makeStyles(theme => ({
  componentBack: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.4,
    backgroundColor: theme.palette.common.black,
    zIndex: 1600,
  },
  menuWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 300,
    backgroundColor:
      theme.palette.common[theme.type === 'light' ? 'white' : 'black'],
    zIndex: 1601,
    padding: 20,
    borderColor: theme.palette.secondary.main,
    borderLeftWidth: 1,
    borderLeftStyle: 'solid',
    overflow: 'auto',
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cvIcon: {
    maxHeight: 48,
  },
  sectionTitle: {
    fontSize: 25,
    paddingTop: 25,
    paddingBottom: 15,
  },
  linkTextWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: 5,
  },
  socialIcon: {
    marginRight: 5,
  },
}));
