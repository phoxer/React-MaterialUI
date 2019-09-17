import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex'
  },
  info: {
    textAlign: 'center',
    '& h3': {
      fontSize: '2rem'
    }
  },
  avatar: {
    width: '100px',
    height: '100px'
  }
}));

export default useStyles;
