import { makeStyles } from '@material-ui/core/styles';

export const skillListStyles = makeStyles(theme => ({
  itemWrapper: {
    borderWidth: 1,
    borderColor: theme.palette.secondary.main,
    borderStyle: 'solid',
    borderRadius: 8,
    // padding: '80px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    textAlign: 'center',
    minHeight: 640,
  },
  itemWrapperSecondary: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  itemTitle: {
    fontSize: 31,
    fontWeight: 'bold',
  },
  skillListWrapper: {
    padding: 30,
  },
  skillItem: {
    fontSize: 21,
  },
}));
