import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    height: '32px'
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  closeButton: {
    padding: '4px',
    color: theme.palette.color.grey
  }
}));
export default useStyles;
