import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '1rem',
    width: '1000px',
    minWidth: '200px',
    margin: '1rem'
  },
  title: {
    margin: 0,
    padding: 0
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));
export default useStyles;
