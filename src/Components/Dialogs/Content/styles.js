import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 4700
  },
  paper: {
    padding: '1rem',
    minWidth: '280px',
    margin: '1rem'
  },
  content: {
    padding: '.5rem',
    overflow: 'hidden'
  }
}));
export default useStyles;
