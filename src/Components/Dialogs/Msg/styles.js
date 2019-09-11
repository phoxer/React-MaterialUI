import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '1rem',
    minWidth: '280px',
    maxWidth: '800px',
    margin: '1rem'
  },
  content: {
    paddingLeft: '0rem'
  },
  text: {
    marginTop: '.8rem'
  }
}));
export default useStyles;
