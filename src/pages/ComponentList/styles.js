import { makeStyles } from '@material-ui/core/styles';

export const componentStyle = makeStyles(theme => ({
  componentListPage: {
    padding: 10,
  },
  itemWrapper: {
    border: '1px solid',
    borderRadius: 8,
    margin: '10px 0',
  },
  itemName: {
    fontSize: 16,
    padding: '5px 20px',
    borderBottom: '1px solid',
  },
  itemComponent: {
    padding: '5px 20px',
  },
}));
